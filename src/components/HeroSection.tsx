import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroNecklace from "@/assets/hero-necklace.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated shimmer overlay */}
      <div className="absolute inset-0 shimmer-effect opacity-30"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-luxury-black/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-gold animate-gold-pulse" />
            <span className="text-sm font-medium text-gold">Ultra-Luxury Collection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight text-luxury-white">
            Luxury Meets
            <span className="block font-medium bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent animate-shimmer">
              Innovation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-luxury-white/80 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Discover the world's first ultra-luxury QR code jewelry collection. Where timeless elegance meets cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-luxury px-8 py-4 text-lg font-semibold h-auto rounded-full min-w-[200px] animate-gold-pulse"
            >
              Discover the Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg h-auto rounded-full border-gold/50 text-gold hover:bg-gold/10 min-w-[200px]"
            >
              Watch Story
            </Button>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 md:opacity-40">
        <img 
          src={heroNecklace} 
          alt="Luxury QR Code Necklace" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;