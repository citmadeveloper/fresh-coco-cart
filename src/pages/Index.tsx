import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />

      <Navbar />
      <Hero />
      <Products />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
