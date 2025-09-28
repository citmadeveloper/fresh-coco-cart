import {
  ShoppingCart,
  Package,
  Truck,
  Home,
  Zap,
  Thermometer,
  Recycle,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: ShoppingCart,
      title: "Choose Your Coconuts",
      description:
        "Browse our premium selection and add your favorite coconuts to cart. We offer young, mature, and premium organic varieties.",
      color: "text-green-800",
      bgColor: "bg-green-100",
    },
    {
      id: 2,
      icon: Package,
      title: "We Pack Fresh",
      description:
        "Our expert team carefully selects and packs your coconuts the same day to ensure maximum freshness and quality.",
      color: "text-green-700",
      bgColor: "bg-green-200",
    },
    {
      id: 3,
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Your coconuts are shipped using our temperature-controlled delivery system to maintain freshness during transit.",
      color: "text-green-900",
      bgColor: "bg-green-300",
    },
    {
      id: 4,
      icon: Home,
      title: "Enjoy Fresh",
      description:
        "Receive your fresh coconuts at your doorstep and enjoy the pure taste of tropical paradise in your own home.",
      color: "text-green-800",
      bgColor: "bg-green-100",
    },
  ];

  const features = [
    {
      id: 1,
      icon: Zap,
      title: "Same Day Processing",
      description:
        "Orders placed before 2 PM are processed the same day for maximum freshness.",
    },
    {
      id: 2,
      icon: Thermometer,
      title: "Temperature Controlled",
      description:
        "Our delivery vehicles maintain optimal temperature to preserve coconut quality.",
    },
    {
      id: 3,
      icon: Recycle,
      title: "Eco-Friendly Packaging",
      description:
        "Sustainable packaging materials that keep coconuts fresh while protecting the environment.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Fresh Delivery
            </span>{" "}
            Works
          </h2>
          <p className="text-lg sm:text-xl text-green-800 max-w-3xl mx-auto">
            From farm to your table in just 4 simple steps. We've streamlined
            our process to ensure you get the freshest coconuts with minimal
            hassle.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }} // smooth hover scale
              className="relative rounded-2xl p-8 bg-lime-300 shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-sm shadow">
                {step.id}
              </div>

              {/* Icon */}
              <div
                className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <step.icon className={`${step.color} w-8 h-8`} />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-green-800 text-center leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 0.9 }} // shrink on hover
              className="text-center bg-green-400 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-10 h-10 text-green-700 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-10 sm:p-12 rounded-3xl text-white shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Experience Fresh Coconuts?
            </h3>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their
              coconut needs. Start your fresh coconut journey today!
            </p>
            <button
              onClick={() => toast.success("Order Will Live")}
              className="bg-white text-green-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:scale-105 transition-transform shadow-md text-sm sm:text-base"
            >
              Start Shopping Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
