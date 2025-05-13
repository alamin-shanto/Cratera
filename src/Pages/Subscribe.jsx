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
  orderBy,
} from "firebase/firestore";
import { useLocation } from "react-router-dom";
import NoSubscription from "./NoSubscription";
import toast from "react-hot-toast";
import { Star } from "lucide-react";

const Subscribe = () => {
  const [subs, setSubs] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const location = useLocation();
  const service = location.state?.service;
  const hasSubscribed = useRef(false);

  const loadReviews = async () => {
    if (!service) return;
    try {
      const reviewRef = collection(db, "reviews");
      const q = query(
        reviewRef,
        where("serviceName", "==", service.name),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const reviewList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewList);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const submitReview = async () => {
    const user = auth.currentUser;
    if (!user || !service || !rating || !reviewText.trim()) return;

    const ratingValue = Number(rating);
    if (ratingValue < 1 || ratingValue > 5) {
      toast.error("Rating must be between 1 to 5");
      return;
    }
    try {
      const review = {
        uid: user.uid,
        userName: user.displayName || "Anonymous",
        serviceName: service.name,
        reviewText,
        rating: ratingValue,
        createdAt: new Date(),
      };
      const reviewRef = collection(db, "reviews");
      await addDoc(reviewRef, review);
      setReviewText("");
      setRating("");
      await loadReviews();
      toast.success("Reviews added Successfully");
    } catch (error) {
      toast.error("Failed to add Review.");
      console.error("Error submitting review:", error);
    }
  };

  const cancelSubscription = async (subId) => {
    try {
      const subRef = doc(db, "subscription", subId);
      await deleteDoc(subRef);
      setSubs((prevSubs) => prevSubs.filter((sub) => sub.id !== subId));
      console.log("Subscription canceled Successfully");
      toast.success("Subscription canceled Successfully");
    } catch (error) {
      toast.error("Failed to Cancel Subscription.");
      console.log("error canceling subscription", error);
    }
  };

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
            toast.success(`Subscribed to ${service.name}`);
            console.log("Adding Subscription", newSub);
            await addDoc(subsRef, newSub);
          } else {
            console.log("Subscription already exist");
            toast("Subscription already exist");
          }
        }

        const subsQuery = query(subsRef, where("uid", "==", user.uid));
        const updatedSnapshot = await getDocs(subsQuery);
        const mySubs = updatedSnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((sub) => sub.userName === user.displayName);
        setSubs(mySubs);
      } catch (error) {
        toast.error("Failed to add Subscription.");
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
          <div className="bg-[var(--n)] mx-auto my-10 max-w-2xl rounded-2xl shadow-md p-5">
            <h3 className="text-bold text-2xl text-center text-[var(--p)] my-5">
              Leave a review
            </h3>
            <textarea
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="bg-white w-full border rounded-2xl p-5 text-[var(--n)] mb-5"
              rows="4"
            ></textarea>
            <input
              type="number"
              placeholder="Rating (1-5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full border rounded-2xl p-5 mb-5"
              min="1"
              max="5"
            />
            <button
              onClick={submitReview}
              className="w-full rounded-2xl px-10 py-5 bg-blue-400 hover:bg-blue-800"
            >
              {" "}
              Submit Review
            </button>
          </div>
          <div className="max-w-4xl rounded-2xl shadow-md mx-auto mt-10 bg-[var(--n)] p-5">
            <h4 className="text-2xl font-bold mb-5 text-center">
              User Reviews
            </h4>
            {reviews.length === 0 ? (
              <p className="font-medium text-center">No Reviews Yet</p>
            ) : (
              reviews.map((r) => (
                <div
                  key={r.id}
                  className="border p-5 mb-5 rounded-2xl shadow-lg bg-[#FAF9F6]"
                >
                  <p className="font-bold text-[var(--n)] text-2xl">
                    {r.userName}
                  </p>
                  <div className="flex items-center">
                    <p className="font-semibold text-[var(--n)] text-2xl">
                      {r.rating}
                    </p>
                    <Star className="text-[var(--n)]" />
                  </div>

                  <p className="text-[var(--n)]">{r.reviewText}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
