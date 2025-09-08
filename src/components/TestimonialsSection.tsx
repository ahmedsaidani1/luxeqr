import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amira Ben Salem",
      role: "Fashion Entrepreneur",
      location: "Tunis",
      rating: 5,
      text: "LuxeCode completely transformed how I network. The necklace is absolutely stunning, and the QR technology is seamless. I've received countless compliments and made incredible connections.",
      avatar: "AB"
    },
    {
      name: "Yasmine Kharrat",
      role: "Art Collector",
      location: "La Marsa",
      rating: 5,
      text: "The craftsmanship is extraordinary. Each piece feels like a work of art. The fact that it's also functional makes it even more special. Worth every dinar.",
      avatar: "YK"
    },
    {
      name: "Rania Mejri",
      role: "Tech Executive",
      location: "Sousse",
      rating: 5,
      text: "I love how innovative yet elegant these pieces are. The QR feature has become my favorite conversation starter at business events. Truly revolutionary jewelry.",
      avatar: "RM"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-luxury-gray to-luxury-black relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gold/10 text-gold border-gold/20 px-4 py-2">
            Client Stories
          </Badge>
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-luxury-white">
            Exclusive
            <span className="block font-medium text-gold">Experiences</span>
          </h2>
          <p className="text-xl text-luxury-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Discover what makes LuxeCode the preferred choice of discerning individuals who value both luxury and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group bg-card/40 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-500 hover:shadow-gold hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote decoration */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12 text-gold" />
              </div>

              <CardContent className="p-8">
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-luxury-white/80 leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-luxury-black font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-luxury-white font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-luxury-white/60">{testimonial.role}</p>
                    <p className="text-xs text-gold">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-light text-gold mb-2">500+</div>
              <div className="text-sm text-luxury-white/60">Exclusive Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gold mb-2">98%</div>
              <div className="text-sm text-luxury-white/60">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gold mb-2">24/7</div>
              <div className="text-sm text-luxury-white/60">Concierge Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gold mb-2">VIP</div>
              <div className="text-sm text-luxury-white/60">Member Club</div>
            </div>
          </div>

          <Badge className="bg-gold/10 text-gold border-gold/20 px-6 py-3 text-base">
            Join our exclusive community of luxury innovators
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;