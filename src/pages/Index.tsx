
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
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      excerpt: "Obra maestra del cyberpunk que revolucionó la animación japonesa.",
      rating: 5
    },
    {
      id: 2,
      title: "Ghost in the Shell",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Referencias Culturales en Evangelion",
      category: "Easter Eggs",
      excerpt: "La serie está repleta de simbolismo religioso y referencias culturales.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
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
