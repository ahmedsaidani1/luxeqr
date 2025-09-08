import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Shield,
  Truck,
  Gift,
  CreditCard,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    collections: [
      { name: "Necklaces", href: "#necklaces" },
      { name: "Bracelets", href: "#bracelets" },
      { name: "Rings", href: "#rings" },
      { name: "Limited Edition", href: "#limited" },
      { name: "Bespoke", href: "#bespoke" }
    ],
    support: [
      { name: "Size Guide", href: "#size-guide" },
      { name: "Care Instructions", href: "#care" },
      { name: "Warranty", href: "#warranty" },
      { name: "Returns", href: "#returns" },
      { name: "FAQ", href: "#faq" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#story" },
      { name: "Craftsmanship", href: "#craftsmanship" },
      { name: "Sustainability", href: "#sustainability" },
      { name: "Press", href: "#press" }
    ]
  };

  const trustBadges = [
    { icon: Shield, text: "Lifetime Guarantee" },
    { icon: Truck, text: "VIP Delivery" },
    { icon: Gift, text: "Luxury Packaging" },
    { icon: CreditCard, text: "Secure Payment" }
  ];

  return (
    <footer className="bg-luxury-black border-t border-gold/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gold/20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold/10 text-gold border-gold/20 px-4 py-2">
              Exclusive Access
            </Badge>
            <h3 className="text-3xl md:text-4xl font-light mb-6 text-luxury-white">
              Join the <span className="text-gold font-medium">LuxeCode Elite</span>
            </h3>
            <p className="text-lg text-luxury-white/80 mb-8 max-w-2xl mx-auto">
              Be the first to discover new collections, receive exclusive offers, and access private events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="flex-1 bg-luxury-gray border-gold/30 text-luxury-white placeholder:text-luxury-white/50 focus:border-gold"
              />
              <Button className="btn-luxury px-8">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <p className="text-xs text-luxury-white/50 mt-4">
              By subscribing, you agree to receive exclusive updates and offers.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-luxury-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-medium text-luxury-white">
                    LuxeCode
                  </h2>
                  <p className="text-sm text-gold/80 font-light tracking-wider">
                    LUXURY BOUTIQUE
                  </p>
                </div>
              </div>
              
              <p className="text-luxury-white/70 leading-relaxed mb-8 max-w-md">
                Where timeless elegance meets cutting-edge innovation. Discover the world's first ultra-luxury QR code jewelry collection, crafted for the discerning individual.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-luxury-white/70">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>Avenue Habib Bourguiba, Tunis 1001, Tunisia</span>
                </div>
                <div className="flex items-center gap-3 text-luxury-white/70">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>+216 71 123 456</span>
                </div>
                <div className="flex items-center gap-3 text-luxury-white/70">
                  <Mail className="w-4 h-4 text-gold" />
                  <span>concierge@luxecode.tn</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-luxury-white hover:text-gold hover:bg-gold/10 rounded-full"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-luxury-white hover:text-gold hover:bg-gold/10 rounded-full"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-luxury-white hover:text-gold hover:bg-gold/10 rounded-full"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Collections */}
            <div>
              <h3 className="text-lg font-medium text-luxury-white mb-6">Collections</h3>
              <ul className="space-y-3">
                {footerLinks.collections.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-luxury-white/70 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-medium text-luxury-white mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-luxury-white/70 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-medium text-luxury-white mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-luxury-white/70 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-12 border-t border-gold/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-sm text-luxury-white/70 group-hover:text-gold transition-colors">
                    {badge.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-luxury-white/60">
              <span>© {currentYear} LuxeCode. All rights reserved.</span>
              <div className="flex items-center gap-6">
                <a href="#privacy" className="hover:text-gold transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-gold transition-colors">
                  Terms of Service
                </a>
                <a href="#cookies" className="hover:text-gold transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-luxury-white/60">
              <span>Crafted with</span>
             
              <span>in Tunisia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;