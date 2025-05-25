import React from "react";
import Navbar from "./components/Navbar";
import ArchitectureSection from "./components/ArchitectureSection";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import MarqueeText from "./components/MarqueeText.jsx";
import { Project } from "./components/Project.jsx";
import HeroVideo from "./components/HeroVideo.jsx";
import FAQSection from "./components/FAQSection.jsx";
import Stats from "./components/Stats.jsx";
import Testimonialsection from "./components/Testimonialsection.jsx";
import CardHoverComponent from "./components/CardHoverComponent.jsx";
import NewsletterSubscription from "./components/NewsletterSubscription.jsx";
import Footer from "./components/Footer.jsx";





function App() {
  return (
    <>
      <Navbar />
      <ArchitectureSection />
      <HeaderSection />
      <AboutSection />
      <ServicesSection />
      <MarqueeText />
      <Project />
      <HeroVideo />
      <FAQSection />
      <Stats />
      <Testimonialsection/>
      <CardHoverComponent/>
      <NewsletterSubscription/>
      <Footer/>
    
      
    </>
  );
}

export default App;
