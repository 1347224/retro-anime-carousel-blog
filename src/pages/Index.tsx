
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SectionCarousels from "@/components/home/SectionCarousels";
import FeaturedContent from "@/components/home/FeaturedContent";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  // Featured content from other sections
  const featuredReviews = [
    {
      id: 1,
      title: "Akira",
      image: "https://wallpapercave.com/wp/pYFAW3Z.jpg",
      excerpt: "Obra maestra del cyberpunk que revolucionó la animación japonesa.",
      rating: 5
    },
    {
      id: 2,
      title: "Ghost in the Shell",
      image: "https://wallpapercave.com/wp/wp1843939.jpg",
      excerpt: "Reflexión filosófica sobre la identidad en la era digital.",
      rating: 5
    }
  ];

  const featuredCuriosities = [
    {
      id: 1,
      title: "Evangelion: Depresión Creativa",
      category: "Behind the Scenes",
      excerpt: "Hideaki Anno creó la serie mientras luchaba contra una severa depresión.",
      image: "https://giffiles.alphacoders.com/111/111891.gif"
    },
    {
      id: 2,
      title: "Referencias Culturales en Evangelion",
      category: "Easter Eggs",
      excerpt: "La serie está repleta de simbolismo religioso y referencias culturales.",
      image: "https://images6.alphacoders.com/691/thumb-1920-691066.jpg"
    }
  ];

  const featuredTopList = {
    title: "Top 5 Mecha Animes de los 90s",
    items: ["Neon Genesis Evangelion", "Mobile Suit Gundam", "Tengen Toppa Gurren Lagann", "Code Geass", "Macross Plus"]
  };

  return (
    <div className="min-h-screen theme-home">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Carousels Sections */}
      <SectionCarousels />
      
      {/* Featured Content Sections */}
      <FeaturedContent 
        featuredReviews={featuredReviews}
        featuredCuriosities={featuredCuriosities}
        featuredTopList={featuredTopList}
      />

      {/* CTA Section */}
      <CallToAction />

      <Footer />
    </div>
  );
};

export default Index;
