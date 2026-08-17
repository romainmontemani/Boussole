import Hero from "../components/Hero.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Pillars from "../components/Pillars.jsx";
import ProfilesPreview from "../components/ProfilesPreview.jsx";
import HomeTestimonials from "../components/HomeTestimonials.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ProfilesPreview />
      <Pillars />
      <HomeTestimonials />
      <CtaBanner />
    </>
  );
}
