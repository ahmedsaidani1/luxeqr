import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import CartDrawer from "@/components/CartDrawer";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { 
  Menu, 
  Search, 
  ShoppingBag, 
  User, 
  Heart,
  Sparkles
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Technology", href: "#technology" },
    { name: "Bespoke", href: "#bespoke" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-luxury-black/95 backdrop-blur-md border-b border-gold/20 shadow-luxury' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-luxury-black" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-medium text-luxury-white">
                LuxeCode
              </h1>
              <p className="text-xs text-gold/80 font-light tracking-wider">
                LUXURY BOUTIQUE
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-luxury-white/80 hover:text-gold transition-colors duration-300 font-medium tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            
            
            
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-luxury-white hover:text-gold hover:bg-gold/10 relative"
              onClick={toggleCart}
            >
              <ShoppingBag className="w-10 h-10" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 bg-gold text-luxury-black text-xs flex items-center justify-center animate-pulse">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
            
           
            
            <Button className="btn-luxury ml-4">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-luxury-white hover:text-gold hover:bg-gold/10 relative"
              onClick={toggleCart}
            >
              <ShoppingBag className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 bg-gold text-luxury-black text-xs flex items-center justify-center animate-pulse">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-luxury-white hover:text-gold hover:bg-gold/10"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-luxury-black border-gold/20">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-luxury-black" />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif font-medium text-luxury-white">
                        LuxeCode
                      </h2>
                      <p className="text-xs text-gold/80 font-light tracking-wider">
                        LUXURY BOUTIQUE
                      </p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="space-y-6">
                      {navLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block text-lg text-luxury-white/80 hover:text-gold transition-colors duration-300 font-medium py-2"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>

                    <div className="mt-12 space-y-4">
                      <Button 
                        variant="outline" 
                        className="w-full border-gold/50 text-gold hover:bg-gold/10"
                      >
                        <Search className="w-4 h-4 mr-2" />
                        Search
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-gold/50 text-gold hover:bg-gold/10"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Wishlist
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-gold/50 text-gold hover:bg-gold/10"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Account
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="w-full btn-luxury">
                      Book Consultation
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <CartDrawer />
    </nav>
  );
};

export default Navbar;