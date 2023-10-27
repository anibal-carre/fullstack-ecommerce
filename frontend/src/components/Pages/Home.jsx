import BannerSection from "../BannerSection";
import Footer from "../Footer";
import ModelSection from "../ModelsSection";
import Navbar from "../NavBar";
import ServicesSection from "../ServicesSection";

const Home = () => {
  return (
    <div className="w-[100vw] border h-auto flex flex-col gap-5">
      <Navbar />
      <BannerSection />
      <ModelSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Home;
