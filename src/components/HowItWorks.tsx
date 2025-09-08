import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Smartphone, Sparkles, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: QrCode,
      title: "Scan Your Code",
      description: "Each piece contains a unique, elegantly integrated QR code that's virtually invisible to the naked eye, maintaining the jewelry's aesthetic perfection."
    },
    {
      icon: Smartphone,
      title: "Connect Instantly",
      description: "Simply scan with any smartphone to unlock personalized experiences, from romantic messages to exclusive content and social connections."
    },
    {
      icon: Sparkles,
      title: "Personalize Your Story",
      description: "Create custom messages, share memories, link to your social profiles, or even store important information in your luxury accessory."
    },
    {
      icon: Users,
      title: "Share & Connect",
      description: "Transform every interaction into a meaningful connection. Share your story, exchange contacts, or create memorable experiences effortlessly."
    }
  ];

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gold/10 text-gold border-gold/20 px-4 py-2">
            Innovation
          </Badge>
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-luxury-white">
            How QR Luxury
            <span className="block font-medium text-gold">Works</span>
          </h2>
          <p className="text-xl text-luxury-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Experience the seamless integration of traditional craftsmanship and modern technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card 
                  key={index} 
                  className="relative group bg-card/30 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-500 hover:shadow-gold hover:-translate-y-2"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-luxury-black font-bold text-sm">
                    {index + 1}
                  </div>

                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-gold" />
                    </div>
                    
                    <h3 className="text-xl font-medium mb-4 text-luxury-white group-hover:text-gold transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-luxury-white/70 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </CardContent>

                  {/* Connecting line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gold/50 to-transparent"></div>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Feature highlight */}
          <div className="mt-20 bg-gradient-to-r from-gold/5 to-transparent rounded-2xl p-12 border border-gold/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-light mb-6 text-luxury-white">
                  Endless <span className="text-gold font-medium">Possibilities</span>
                </h3>
                <ul className="space-y-4 text-luxury-white/80">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Store emergency contact information
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Share your professional portfolio
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Create romantic surprise messages
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Connect to exclusive experiences
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    Link to your social media profiles
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-gradient-gold rounded-2xl flex items-center justify-center animate-gold-pulse">
                    <QrCode className="w-16 h-16 text-luxury-black" />
                  </div>
                  <div className="absolute -inset-4 rounded-2xl border-2 border-gold/30 animate-pulse"></div>
                </div>
                <p className="mt-6 text-sm text-luxury-white/60 italic">
                  Your story, encoded in luxury
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;