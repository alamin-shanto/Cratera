import CountupCard from "../Components/CountupCard";
import Partnerships from "../Components/Partnerships";
import Slider from "../Components/Slider";
import SubscriptionBox from "../Components/SubscriptionBox";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Slider></Slider>
      <SubscriptionBox></SubscriptionBox>
      <CountupCard></CountupCard>
      <Partnerships />
    </div>
  );
};

export default Home;
