import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Gift, Shield, Truck } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 animate-shimmer"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full animate-pulse"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${10 + (i * 5)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-gold text-luxury-black px-6 py-3 text-base font-medium animate-gold-pulse">
            <Sparkles className="w-4 h-4 mr-2" />
            Limited Time Offer
          </Badge>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 text-luxury-white leading-tight">
            Begin Your
            <span className="block font-medium bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              Luxury Journey
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-luxury-white/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Join the exclusive world of LuxeCode. Where every piece tells a story, and every story creates a connection.
          </p>

          {/* Special offer */}
          <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mb-12 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="text-sm text-gold font-medium mb-2">EXCLUSIVE LAUNCH OFFER</div>
              <div className="text-3xl font-light text-luxury-white">
                Save <span className="text-gold font-medium">25%</span> on your first purchase
              </div>
              <div className="text-sm text-luxury-white/60 mt-2">Valid until limited collection sells out</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="btn-luxury px-12 py-6 text-xl font-semibold h-auto rounded-full min-w-[280px] animate-gold-pulse group"
            >
              Shop Now - Save 25%
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-6 text-xl h-auto rounded-full border-gold/50 text-gold hover:bg-gold/10 min-w-[280px]"
            >
              Book Private Consultation
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <Gift className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-medium text-luxury-white mb-2">Luxury Gift Box</h3>
              <p className="text-sm text-luxury-white/60">Every piece comes in our signature luxury packaging</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-medium text-luxury-white mb-2">Lifetime Guarantee</h3>
              <p className="text-sm text-luxury-white/60">Complete protection and lifetime support included</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <Truck className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-medium text-luxury-white mb-2">VIP Delivery</h3>
              <p className="text-sm text-luxury-white/60">White-glove delivery service across Tunisia</p>
            </div>
          </div>

          {/* Urgency indicator */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/10 border border-gold/20">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
              <span className="text-sm text-gold font-medium">Only 47 pieces remaining in launch collection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;