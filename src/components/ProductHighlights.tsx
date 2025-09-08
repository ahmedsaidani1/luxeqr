import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { Sparkles, Heart, Star } from "lucide-react";
import productBracelets from "@/assets/product-bracelets.jpg";
import productNecklaceDetail from "@/assets/product-necklace-detail.jpg";

const ProductHighlights = () => {
  const { addItem, openCart } = useCart();

  const products = [
    {
      id: 1,
      productId: "eternal-code-necklace",
      name: "Eternal Code Necklace",
      price: 2890,
      originalPrice: 3490,
      image: productNecklaceDetail,
      description: "Handcrafted 18k gold with integrated QR technology",
      features: ["18K Gold", "QR Integration", "Limited Edition"],
      badge: "Bestseller"
    },
    {
      id: 2,
      productId: "infinity-collection",
      name: "Infinity Collection",
      price: 1890,
      originalPrice: 2290,
      image: productBracelets,
      description: "Three elegant bracelets with smart QR charms",
      features: ["Set of 3", "Smart Charms", "Adjustable"],
      badge: "New Arrival"
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.productId,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      features: product.features
    });
    
    toast.success(`${product.name} added to cart`, {
      action: {
        label: "View Cart",
        onClick: () => openCart(),
      },
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-TN', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-luxury-black to-luxury-gray relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full animate-pulse"
            style={{
              left: `${20 + (i * 8)}%`,
              top: `${20 + (i * 6)}%`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gold/10 text-gold border-gold/20 px-4 py-2">
            Featured Collection
          </Badge>
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-luxury-white">
            Signature
            <span className="block font-medium text-gold">Masterpieces</span>
          </h2>
          <p className="text-xl text-luxury-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Discover our most coveted pieces, where luxury meets innovation in perfect harmony.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group relative overflow-hidden bg-card/40 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-500 hover:shadow-gold hover:-translate-y-2"
            >
              <div className="absolute top-4 left-4 z-20">
                <Badge className={`${product.badge === 'Bestseller' ? 'bg-gold text-luxury-black' : 'bg-primary text-primary-foreground'} font-medium`}>
                  {product.badge}
                </Badge>
              </div>
              
              {/* Product image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-sm text-luxury-white/60 ml-2">(127 reviews)</span>
                </div>

                <h3 className="text-2xl font-medium mb-3 text-luxury-white group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-luxury-white/70 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs border-gold/30 text-gold/80">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-light text-gold">{formatPrice(product.price)} TND</span>
                    {product.originalPrice && (
                      <span className="text-lg text-luxury-white/50 line-through">{formatPrice(product.originalPrice)} TND</span>
                    )}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-gold/50 text-gold hover:bg-gold/10"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Button 
                    className="flex-1 btn-luxury"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-gold/50 text-gold hover:bg-gold/10">
                    <Sparkles className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-12 py-4 text-lg border-gold/50 text-gold hover:bg-gold/10 rounded-full"
          >
            View Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;