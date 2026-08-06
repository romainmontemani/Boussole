import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Quiz from "./components/Quiz.jsx";
import Testimonials from "./components/Testimonials.jsx";
import InstallBanner from "./components/InstallBanner.jsx";
import Home from "./pages/Home.jsx";
import TestimonialPage from "./pages/TestimonialPage.jsx";
import Faq from "./pages/Faq.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/parcours" element={<Testimonials />} />
        <Route path="/parcours/:id" element={<TestimonialPage />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
      <InstallBanner />
    </>
  );
}
