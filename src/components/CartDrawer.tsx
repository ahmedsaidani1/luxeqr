import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle,
  SheetFooter 
} from "@/components/ui/sheet";
import { 
  Minus, 
  Plus, 
  X, 
  ShoppingBag, 
  Trash2,
  ArrowRight,
  Gift,
  Shield
} from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

const CartDrawer = () => {
  const { 
    state, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    closeCart, 
    getTotalItems, 
    getTotalPrice 
  } = useCart();

  const handleCheckout = () => {
    if (state.items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    toast.success("Redirecting to secure checkout...");
    // Here you would integrate with your payment processor
    closeCart();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-TN', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 2000 ? 0 : 50; // Free shipping over 2000 TND
  const total = subtotal + shipping;

  return (
    <Sheet open={state.isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg bg-luxury-black border-gold/20 flex flex-col">
        <SheetHeader className="border-b border-gold/20 pb-6">
          <SheetTitle className="flex items-center gap-3 text-luxury-white">
            <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-luxury-black" />
            </div>
            Shopping Cart
            {getTotalItems() > 0 && (
              <Badge className="bg-gold text-luxury-black">
                {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto py-6">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-gold/50" />
              </div>
              <h3 className="text-xl font-medium text-luxury-white mb-2">Your cart is empty</h3>
              <p className="text-luxury-white/60 mb-6">Discover our exclusive collection of luxury QR jewelry</p>
              <Button 
                onClick={closeCart}
                className="btn-luxury"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {state.items.map((item) => (
                <div key={item.id} className="group">
                  <div className="flex gap-4 p-4 rounded-lg bg-card/20 border border-gold/10 hover:border-gold/30 transition-all duration-300">
                    {/* Product Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-luxury-gray">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-luxury-white text-sm leading-tight">
                          {item.name}
                        </h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="w-6 h-6 text-luxury-white/50 hover:text-red-400 hover:bg-red-400/10 opacity-0 group-hover:opacity-100 transition-all"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.features.slice(0, 2).map((feature) => (
                          <Badge 
                            key={feature} 
                            variant="outline" 
                            className="text-xs border-gold/30 text-gold/70 px-2 py-0"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-gold font-medium">
                            {formatPrice(item.price)} TND
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-luxury-white/40 line-through">
                              {formatPrice(item.originalPrice)} TND
                            </span>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border-gold/30 text-gold hover:bg-gold/10"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-luxury-white font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border-gold/30 text-gold hover:bg-gold/10"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Cart Button */}
              {state.items.length > 0 && (
                <div className="pt-4 border-t border-gold/20">
                  <Button
                    variant="ghost"
                    onClick={clearCart}
                    className="w-full text-luxury-white/60 hover:text-red-400 hover:bg-red-400/10"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear Cart
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Cart Summary & Checkout */}
        {state.items.length > 0 && (
          <SheetFooter className="border-t border-gold/20 pt-6">
            <div className="w-full space-y-6">
              {/* Order Summary */}
              <div className="space-y-3">
                <div className="flex justify-between text-luxury-white/80">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)} TND</span>
                </div>
                <div className="flex justify-between text-luxury-white/80">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-gold" : ""}>
                    {shipping === 0 ? "Free" : `${formatPrice(shipping)} TND`}
                  </span>
                </div>
                {shipping === 0 && (
                  <div className="flex items-center gap-2 text-xs text-gold">
                    <Gift className="w-3 h-3" />
                    <span>Free VIP delivery included</span>
                  </div>
                )}
                <div className="border-t border-gold/20 pt-3">
                  <div className="flex justify-between text-lg font-medium text-luxury-white">
                    <span>Total</span>
                    <span className="text-gold">{formatPrice(total)} TND</span>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 py-4 bg-card/20 rounded-lg border border-gold/10">
                <div className="flex items-center gap-2 text-xs text-luxury-white/60">
                  <Shield className="w-3 h-3 text-gold" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-luxury-white/60">
                  <Gift className="w-3 h-3 text-gold" />
                  <span>Luxury Packaging</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button 
                onClick={handleCheckout}
                className="w-full btn-luxury py-4 text-lg font-semibold group"
              >
                Secure Checkout
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-center text-luxury-white/50">
                Secure checkout powered by industry-leading encryption
              </p>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;