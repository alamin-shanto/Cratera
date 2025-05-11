import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../Firebase/firebase";
import {
  getDocs,
  collection,
  addDoc,
  where,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useLocation } from "react-router-dom";
import NoSubscription from "./NoSubscription";

const Subscribe = () => {
  const [subs, setSubs] = useState([]);
  const location = useLocation();
  const service = location.state?.service;

  const cancelSubscription = async (subId) => {
    try {
      const subRef = doc(db, "subscription", subId);
      await deleteDoc(subRef);
      setSubs((prevSubs) => prevSubs.filter((sub) => sub.id !== subId));
      console.log("Subscription canceled Successfully");
    } catch (error) {
      console.log("error canceling subscription", error);
    }
  };

  const hasSubscribed = useRef(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const subsRef = collection(db, "subscription");

        if (service && !hasSubscribed.current) {
          hasSubscribed.current = true;
          const duplicateCheckQuery = query(
            subsRef,
            where("uid", "==", user.uid),
            where("serviceName", "==", service.name)
          );

          const duplicateSnapshot = await getDocs(duplicateCheckQuery);
          if (duplicateSnapshot.empty) {
            const newSub = {
              uid: user.uid,
              userName: user.displayName || "Anonymous",
              serviceName: service.name,
              serviceDescription: service.description,
              serviceImage: service.thumbnail,
              ServicePrice: service.price,
            };
            console.log("Adding Subscription", newSub);
            await addDoc(subsRef, newSub);
          } else {
            console.log("Subscription already exist");
          }
        }

        const subsQuery = query(subsRef, where("uid", "==", user.uid));
        const updatedSnapshot = await getDocs(subsQuery);
        const mySubs = updatedSnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((sub) => sub.userName === user.displayName);
        setSubs(mySubs);
      } catch (error) {
        console.error("error fetching subscriptions:", error);
      }
    };
    loadData();
  }, [service]);

  return (
    <div className="p-5">
      {subs.length === 0 ? (
        <NoSubscription />
      ) : (
        <div>
          <h2 className="text-4xl text-center font-extrabold my-10 text-[var(--p)]">
            My Subscriptions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {" "}
            {subs.map((sub, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[var(--n)] to-[var(--b3)]  p-5 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={sub.serviceImage}
                  alt=""
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h4 className="text-2xl font-bold text-[var(--nc)] mb-2">
                  {sub.serviceName}
                </h4>
                <p className="text-sm text-[var(--s)] mb-4 line-clamp-3">
                  {sub.serviceDescription}
                </p>
                <p className="text-md text-[var(--in)] font-semibold">
                  <b>Price:</b> {sub.ServicePrice}
                </p>
                <button
                  className="bg-[var(--p)] hover:bg-[var(--er)] p-3 text-white mt-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => cancelSubscription(sub.id)}
                >
                  Cancel Subscription
                </button>
              </div>
            ))}
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Subscribe;
