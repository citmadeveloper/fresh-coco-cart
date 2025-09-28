import { useState } from "react";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#process", label: "How It Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <h1
              className="text-2xl sm:text-3xl font-extrabold 
   bg-tropical-gradient bg-clip-text text-transparent
    tracking-wide"
            >
              Jeeva Coconuts
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div
            className="hidden md:flex items-center space-x-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="p-2 text-foreground hover:text-primary transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button
              className="px-4 py-2 rounded-2xl font-semibold 
              bg-gradient-to-r from-green-300 to-emerald-400 
              text-white shadow-md hover:shadow-lg 
              transition-all flex items-center"
              onClick={()=>toast.success("Scroll Down.")}
            >
              <Phone size={16} className="mr-2" />
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-fade-up">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-background border-t border-border shadow-lg">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <button
                className="w-full px-4 py-2 rounded-2xl font-semibold 
                bg-gradient-to-r from-green-300 to-emerald-400 
                text-white shadow-md hover:shadow-lg 
                transition-all flex items-center justify-center"
              >
                <Phone size={16} className="mr-2" />
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
