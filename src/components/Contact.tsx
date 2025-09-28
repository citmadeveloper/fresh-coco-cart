import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for contacting us. We'll get back to you within 24 hours.",
        variant: "success",
        position: "top-right",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "general",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 8610201604"],
      color: "text-green-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["jeeva@gmail.com", "cocountJeeva@gmail.com"],
      color: "text-blue-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Guruvarajapalayam Vellore - 632107"],
      color: "text-red-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon-Fri: 8AM - 8PM", "Sat-Sun: 9AM - 6PM"],
      color: "text-purple-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
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
            Get in{" "}
            <span className="bg-tropical-gradient bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our coconuts or need help with your order?
            We're here to help! Reach out and we'll respond quickly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="bg-accent/50 p-8 rounded-3xl border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-transform duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-transform duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-transform duration-200"
                      placeholder="+91 8610201604"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-transform duration-200"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="delivery">Delivery Question</option>
                      <option value="quality">Quality Concern</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-transform duration-200 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-tropical w-full disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="space-y-6 md:space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={`p-3 rounded-lg bg-accent`}>
                    <info.icon className={`${info.color} w-6 h-6`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-muted-foreground text-sm sm:text-base"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Guarantee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-2xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="text-primary w-6 h-6" />
                  <h4 className="text-lg font-semibold text-foreground">
                    Quick Response Guarantee
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">
                  We typically respond to all inquiries within 24 hours. For
                  urgent matters, please call us directly for immediate
                  assistance.
                </p>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 h-64 bg-accent rounded-2xl flex items-center justify-center border border-border"
              >
                <div className="text-center">
                  <MapPin className="text-primary w-12 h-12 mx-auto mb-2" />
                  <p className="text-foreground font-medium">
                    Guruvarajapalayam Vellore - 632107
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
