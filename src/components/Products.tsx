import { ShoppingCart, Star, Droplets, Utensils, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

import youngCoconuts from "@/assets/young-coconuts.jpg";
import matureCoconuts from "@/assets/mature-coconuts.jpg";
import premiumCoconuts from "@/assets/premium-coconuts.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Young Green Coconuts",
      price: "₹25",
      originalPrice: "₹35",
      image: youngCoconuts,
      description:
        "Perfect for drinking fresh coconut water. Sweet, refreshing, and packed with natural electrolytes.",
      features: ["Rich in Electrolytes", "Natural Hydration", "Low Calories"],
      icon: Droplets,
      badge: "Best Seller",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Mature Brown Coconuts",
      price: "₹10",
      originalPrice: "₹15",
      image: matureCoconuts,
      description:
        "Ideal for cooking and eating. Rich coconut meat perfect for curries, desserts, and coconut milk.",
      features: ["Rich Coconut Meat", "Perfect for Cooking", "High in Fiber"],
      icon: Utensils,
      badge: "Chef's Choice",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Premium Organic Set",
      price: "₹20",
      originalPrice: "₹30",
      image: premiumCoconuts,
      description:
        "Our premium selection including coconut oil, flakes, and whole coconuts. Perfect for health enthusiasts.",
      features: ["100% Organic", "Value Pack", "Multi-Purpose"],
      icon: Sparkles,
      badge: "Premium",
      rating: 5.0,
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-tropical-gradient bg-clip-text text-transparent">
              Premium
            </span>{" "}
            Collection
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Hand-picked coconuts from the finest tropical farms. Each coconut is
            carefully selected for quality, freshness, and taste to ensure you
            get the best nature has to offer.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-8 mb-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card-product group"
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {product.badge}
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={14} />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-2">
                  <product.icon className="text-primary" size={20} />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {product.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-accent text-accent-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl sm:text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Compact button with toast */}
                  <button
                    onClick={() =>
                      toast.success(`${product.name} added to cart!`)
                    }
                    className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors"
                  >
                    <ShoppingCart size={16} />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center bg-gradient-to-r from-accent to-background border border-border rounded-3xl p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Can't decide? Try our variety pack!
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get a taste of all our premium coconuts with our specially curated
            variety pack. Perfect for first-time customers or coconut
            enthusiasts.
          </p>
          <button
            onClick={() => toast.success("Variety Pack ordered!")}
            className="btn-tropical text-sm sm:text-base"
          >
            Order Variety Pack - ₹39.99
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
