import { ArrowRight, Star, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-coconuts.jpg";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  const features = [
    { icon: Star, text: "Premium Quality" },
    { icon: Truck, text: "Fast Delivery" },
    { icon: Shield, text: "100% Natural" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-16 bg-hero relative overflow-hidden flex items-center"
    >
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left Column */}
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            variants={fadeUp}
          >
            {/* Tag */}
            <motion.div variants={fadeUp}>
              <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                🥥 Fresh & Organic
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight font-inter"
              variants={fadeUp}
            >
              Fresh{" "}
              <span className="bg-tropical-gradient bg-clip-text text-transparent">
                Coconuts
              </span>
              <br />
              Delivered to Your Door
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-inter"
              variants={fadeUp}
            >
              Experience the pure taste of tropical paradise with our premium,
              hand-picked coconuts. Fresh from the farm to your table —
              guaranteed natural and delicious.
            </motion.p>

            {/* Features */}
            <motion.div
              className="flex flex-wrap gap-4 sm:gap-6"
              variants={fadeUp}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 bg-background/50 backdrop-blur-sm px-4 py-3 rounded-full border border-border shadow-sm"
                >
                  <feature.icon className="text-primary" size={20} />
                  <span className="text-foreground font-medium font-inter">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Tropical Icons */}
            <motion.div
              className="flex flex-wrap sm:flex-nowrap items-center gap-6"
              variants={fadeUp}
            >
              {[
                { icon: "🌴", label: "Tropical Fresh" },
                { icon: "🥥", label: "Farm Direct" },
                { icon: "🌊", label: "Ocean Fresh" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-foreground font-medium font-inter">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUp}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="z-50 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg flex items-center justify-center"
                onClick={() => toast.success("Order Placed! 🌴")}
              >
                Shop Now <ArrowRight className="ml-2" size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="z-50 px-6 py-3 rounded-xl font-semibold border border-primary text-primary shadow-sm bg-white/70 backdrop-blur-sm"
               onClick={() => toast.success("Product will Live! 🌴")}
              >
                View Products
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-border"
              variants={fadeUp}
            >
              {[
                { value: "1000+", label: "Happy Customers" },
                { value: "24h", label: "Fresh Delivery" },
                { value: "100%", label: "Organic" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary font-inter">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-inter">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={scaleIn}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <img
                src={heroImage}
                alt="Fresh Coconuts"
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-3xl"></div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold shadow-lg font-inter"
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
            >
              ⭐ Premium Quality
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg font-inter"
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
            >
              🚚 Fast Delivery
            </motion.div>
            <motion.div
              className="absolute top-1/2 -left-8 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg font-inter"
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
            >
              🌿 100% Natural
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
    </section>
  );
};

export default Hero;
