// components/HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaAmazon, FaStar, FaUsers } from "react-icons/fa";
import Typewriter from "typewriter-effect";

interface HeroSectionProps {
  smoothScrollTo: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ smoothScrollTo }) => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20book%20marketing%20background%2C%20bookshelves%20with%20modern%20gradient%20overlay%2C%20clean%20minimal%20design%2C%20blue%20and%20purple%20tones&width=1440&height=900&orientation=landscape')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-800/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">We Help Authors</span>
                <span className="block text-blue-300 mt-2 min-h-[1.5em]">
                  <Typewriter
                    options={{
                      strings: ["Sell More Books", "Boost Your Rankings", "Build Loyal Readers"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 70,
                      wrapperClassName: "text-blue-300",
                      cursorClassName: "text-blue-300 animate-pulse"
                    }}
                  />
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
                Professional Book Marketing, Promotion, Branding & Visibility on Amazon, Kindle & Social Media.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
              <button
                onClick={() => smoothScrollTo("services")}
                className="bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
              >
                Start Marketing My Book
              </button>
              <button
                onClick={() => smoothScrollTo("reviews")}
                className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 active:scale-95"
              >
                View Success Stories
              </button>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 border border-white/20">
              <div className="space-y-6 md:space-y-8">
                {/* Amazon Partner Badge */}
                <div className="flex items-center gap-4 bg-white/20 rounded-2xl p-4 md:p-6">
                  <div className="bg-white p-2 md:p-3 rounded-xl flex-shrink-0">
                    <FaAmazon className="text-3xl md:text-4xl text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Amazon Partner</h3>
                    <p className="text-blue-200 text-sm md:text-base">Official Marketing Partner</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="text-center bg-white/10 rounded-2xl p-4 md:p-6">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                      <FaUsers className="text-2xl md:text-3xl" />
                      500+
                    </div>
                    <div className="text-blue-200 font-medium text-sm md:text-base">Authors Helped</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-2xl p-4 md:p-6">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                      <FaStar className="text-2xl md:text-3xl" />
                      4.9+
                    </div>
                    <div className="text-blue-200 font-medium text-sm md:text-base">Rating</div>
                  </div>
                </div>

                {/* Testimonial Preview */}
                <div className="bg-white/20 rounded-2xl p-4 md:p-6">
                  <p className="italic text-base md:text-lg text-white mb-3 md:mb-4">
"In a sea of stories, yours was meant to stand the test of time. Let us help it reach shore."

                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.section>
  );
};

export default HeroSection;