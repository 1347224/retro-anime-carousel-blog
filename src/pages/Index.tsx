
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AnimeCarousel from "@/components/AnimeCarousel";
import BlogSection from "@/components/BlogSection";
import CategoriesSection from "@/components/CategoriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AnimeCarousel />
      <BlogSection />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
