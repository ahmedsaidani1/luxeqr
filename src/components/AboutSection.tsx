import { Badge } from "@/components/ui/badge";
import { Gem, Crown, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gold/10 text-gold border-gold/20 px-4 py-2">
              Our Story
            </Badge>
            <h2 className="text-4xl md:text-6xl font-light mb-8 text-luxury-white">
              Where Craftsmanship
              <span className="block font-medium text-gold">Meets Innovation</span>
            </h2>
            <p className="text-xl text-luxury-white/80 font-light leading-relaxed max-w-3xl mx-auto">
              Born from a vision to revolutionize luxury jewelry, LuxeCode represents the perfect fusion of traditional craftsmanship and cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center group-hover:animate-gold-pulse transition-all duration-300">
                <Crown className="w-10 h-10 text-luxury-black" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-luxury-white">Exclusive Craftsmanship</h3>
              <p className="text-luxury-white/70 leading-relaxed">
                Each piece is meticulously handcrafted by master jewelers using only the finest materials and time-honored techniques.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center group-hover:animate-gold-pulse transition-all duration-300">
                <Zap className="w-10 h-10 text-luxury-black" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-luxury-white">Smart Innovation</h3>
              <p className="text-luxury-white/70 leading-relaxed">
                Revolutionary QR technology seamlessly integrated into luxury designs, opening endless possibilities for personalization.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center group-hover:animate-gold-pulse transition-all duration-300">
                <Gem className="w-10 h-10 text-luxury-black" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-luxury-white">Limited Edition</h3>
              <p className="text-luxury-white/70 leading-relaxed">
                Every collection is strictly limited, ensuring exclusivity and preserving the unique character of your piece.
              </p>
            </div>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-12 border border-gold/20 text-center">
            <h3 className="text-3xl font-light mb-6 text-luxury-white">
              The Art of <span className="text-gold font-medium">Digital Luxury</span>
            </h3>
            <p className="text-lg text-luxury-white/80 leading-relaxed max-w-4xl mx-auto">
              We believe that luxury is not just about materials—it's about creating meaningful connections and unforgettable experiences. 
              Our QR code jewelry transforms traditional accessories into powerful tools for self-expression, allowing you to share your story, 
              connect with others, and create lasting memories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;