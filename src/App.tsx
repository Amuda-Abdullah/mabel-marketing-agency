// App.tsx
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
  easeOut,
} from "framer-motion";
import { FaAmazon, FaStar, FaUsers, FaBookOpen } from "react-icons/fa";
import Navbar from "./components/Navbar";
import About from "./components/About";

/**
 * Reusable animated section component.
 */
const AnimatedSection: React.FC<
  React.PropsWithChildren<{
    id?: string;
    className?: string;
    style?: React.CSSProperties;
  }>
> = ({ id, className, style, children }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.15, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 30, scale: 0.995 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref as any}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "team",
        "authors",
        "reviews",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            window.history.replaceState(null, "", `#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.history.pushState(null, "", `#${id}`);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash && document.getElementById(hash)) {
        setTimeout(() => {
          smoothScrollTo(hash);
        }, 100);
      }
    };

    window.addEventListener("popstate", handleHash);
    handleHash();

    return () => {
      window.removeEventListener("popstate", handleHash);
    };
  }, []);

  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        smoothScrollTo={smoothScrollTo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section */}
      <AnimatedSection
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20book%20marketing%20background%2C%20bookshelves%20with%20modern%20gradient%20overlay%2C%20clean%20minimal%20design%2C%20blue%20and%20purple%20tones&width=1440&height=900&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-800/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                <span className="block">We Help Authors</span>
                <span className="block text-blue-300">Sell More Books &</span>
                <span className="block">Build Loyal Readers.</span>
              </h1>
              
              <p className="text-xl text-blue-100 max-w-2xl">
                Professional Book Marketing, Promotion, Branding & Visibility on Amazon, Kindle & Social Media.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => smoothScrollTo("services")}
                  className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Marketing My Book
                </button>
                <button
                  onClick={() => smoothScrollTo("reviews")}
                  className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  View Success Stories
                </button>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="space-y-8">
                {/* Amazon Partner Badge */}
                <div className="flex items-center gap-4 bg-white/20 rounded-2xl p-6">
                  <div className="bg-white p-3 rounded-xl">
                    <FaAmazon className="text-4xl text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Amazon Partner</h3>
                    <p className="text-blue-200">Official Marketing Partner</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center bg-white/10 rounded-2xl p-6">
                    <div className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                      <FaUsers />
                      500+
                    </div>
                    <div className="text-blue-200 font-medium">Authors Helped</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-2xl p-6">
                    <div className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                      <FaStar />
                      4.9+
                    </div>
                    <div className="text-blue-200 font-medium">Rating</div>
                  </div>
                </div>

                {/* Testimonial Preview */}
                <div className="bg-white/20 rounded-2xl p-6">
                  <p className="italic text-lg text-white mb-4">"They transformed my book from unnoticed to bestseller in just 3 months!"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-300 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-white">Sarah Johnson</div>
                      <div className="text-blue-200 text-sm">Bestselling Author</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Other sections would continue here... */}
      <AnimatedSection id="about" className="py-20 bg-white">
        <div className="">
          <About />
        </div>
      </AnimatedSection>

      {/* Continue with Services, Team, Authors, Reviews, Contact sections... */}
    </div>
  );
};

export default App;