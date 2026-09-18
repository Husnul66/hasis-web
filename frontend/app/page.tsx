import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import Features from "@/components/Features";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; // BURASI İMPORT EDİLMİŞ OLMALI

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ff]">
      <TopBar />
      <Navbar />
      <Hero /> 
      <Features />
      <Services />
      <Footer />
      <WhatsAppButton /> {/* BURASI EKLENMİŞ OLMALI */}
    </main>
  );
}