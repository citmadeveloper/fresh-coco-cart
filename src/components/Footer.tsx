import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const Footer = () => {
  const handleSubscribe = () => {
    toast.success("Subscribed successfully! 🌴");
  };
  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Story", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    products: [
      { name: "Young Coconuts", href: "#products" },
      { name: "Mature Coconuts", href: "#products" },
      { name: "Premium Sets", href: "#products" },
      { name: "Bulk Orders", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-b border-background/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-3xl font-bold mb-4 animate-fade-up">
            Stay Fresh with Our Newsletter
          </h3>
          <p className="text-background/80 mb-8 max-w-2xl mx-auto animate-fade-up">
            Get exclusive offers, coconut recipes, and health tips delivered to
            your inbox. Join our tropical community today!
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSubscribe}
              className="btn-tropical flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#05DF72] via-[#31C950] to-[#5EE9B5] text-white hover:scale-105 transition-transform shadow-md"
            >
              <Mail size={16} className="mr-2" />
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold bg-tropical-gradient bg-clip-text text-transparent mb-4">
              FreshCoconuts
            </h2>
            <p className="text-background/80 mb-6 leading-relaxed">
              Bringing you the freshest coconuts straight from tropical paradise
              to your doorstep. Experience the pure taste of nature with every
              bite.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-background/80">+91 8610201604</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-background/80">jeeva@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-background/80">
                  cocountJeeva@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-background/80">
                  Guruvarajapalayam Vellore - 632107
                </span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([section, links], idx) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1) }}
            >
              <h4 className="text-lg font-semibold mb-4 capitalize">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-[var(--transition-smooth)]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-background/20"
        >
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="bg-background/10 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">
                🌱 100% Organic Certified
              </span>
            </div>
            <div className="bg-background/10 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">
                🚚 Carbon Neutral Delivery
              </span>
            </div>
            <div className="bg-background/10 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">
                ⭐ 4.9/5 Customer Rating
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-t border-background/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-background/80 mb-4 md:mb-0">
            <span>© 2024 FreshCoconuts. Made with</span>
            <Heart className="text-red-400 fill-current" size={16} />
            <span>for coconut lovers</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 bg-background/10 rounded-lg text-background/80 hover:text-primary hover:bg-background/20 transition-[var(--transition-smooth)]"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
