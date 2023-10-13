import HeroSection from "../HeroSection";
import Navbar from "../NavBar";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-5">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
