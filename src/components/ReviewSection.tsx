// components/ReviewsSection.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  title: string;
  content: string;
  stats: string;
  genre: string;
  avatarColor: string;
}

const ReviewsSection: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Donal Ryan",
      role: "Literature & Fiction Author",
      rating: 5,
      title: "Professional Marketing That Actually Works",
      content: "Their team took my literary fiction book and created a marketing strategy that actually connected with serious readers. The Amazon optimization alone increased my sales by 150%. They understand that quality literature needs a different approach than genre fiction.",
      stats: "150% sales increase in first 2 months",
      genre: "Literature & Fiction",
      avatarColor: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "J. D. Kinnest",
      role: "Humor & Entertainment Author",
      rating: 5,
      title: "Made My Humor Book Actually Funny to Market",
      content: "Marketing humor books is tricky, but their team nailed it. They created campaigns that actually reflected the tone of my book. The social media campaigns went viral multiple times, and my book became a bestseller in its category within 3 weeks.",
      stats: "Bestseller in Humor Category (3 weeks)",
      genre: "Humor & Entertainment",
      avatarColor: "from-amber-500 to-amber-600",
    },
    {
      id: 3,
      name: "Madison Love",
      role: "Religion & Spirituality Author",
      rating: 5,
      title: "Respectful and Effective Spiritual Book Marketing",
      content: "They handled my spiritual book with the respect and sensitivity it deserved while still creating effective marketing campaigns. The community building they did helped me connect with readers who truly resonated with my message.",
      stats: "Built 5,000+ spiritual reader community",
      genre: "Religion & Spirituality",
      avatarColor: "from-pink-500 to-pink-600",
    },
    {
      id: 4,
      name: "Emma Greene",
      role: "Children's Book Author",
      rating: 5,
      title: "Perfect for Children's Book Authors",
      content: "As a children's book author, I needed someone who understood how to reach parents and educators. Their targeted campaigns reached exactly the right audience. My book sales tripled and I'm now getting requests from schools for readings.",
      stats: "300% sales increase, school requests",
      genre: "Children's Books",
      avatarColor: "from-purple-500 to-purple-600",
    },
    {
      id: 5,
      name: "M.L. Scott",
      role: "Mystery Author",
      rating: 5,
      title: "Turned My Mystery Series Into a Success",
      content: "Their mystery genre expertise was evident from day one. They created suspenseful marketing campaigns that actually made people want to read my books. My entire series now has consistent monthly sales where before it was hit or miss.",
      stats: "Consistent monthly series sales",
      genre: "Mystery",
      avatarColor: "from-indigo-500 to-indigo-600",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
  };

  return (
    <section id="reviews" className="py-20 bg-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
            <div className="text-[#d4af37] font-semibold tracking-wider uppercase text-sm flex items-center justify-center mb-4">
                                  <span className="">
                                  <GoDotFill />
                                  </span>
                                    TESTIMONIALS
                                </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Authors Say About Us
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Real success stories from real authors who have transformed their book sales with our marketing expertise.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative mx-6 mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
          >
            <FaChevronLeft />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
          >
            <FaChevronRight />
          </button>

          {/* Carousel Content */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Column - Review Content */}
                  <div className="p-8 md:p-12">
                    <div className="mb-8">
                      <FaQuoteLeft className="text-4xl text-blue-500 mb-6" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(reviews[currentReview].rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-500" />
                        ))}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {reviews[currentReview].title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {reviews[currentReview].content}
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                        <p className="text-blue-700 font-semibold">
                          {reviews[currentReview].stats}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Author Info */}
                  <div className="p-8 md:p-12 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${reviews[currentReview].avatarColor} mb-6 flex items-center justify-center`}>
                        <span className="text-white text-3xl font-bold">
                          {reviews[currentReview].name.charAt(0)}
                        </span>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        {reviews[currentReview].name}
                      </h4>
                      
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                          {reviews[currentReview].role}
                        </span>
                      </div>
                      
                      <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-blue-700 font-medium">
                          {reviews[currentReview].genre}
                        </span>
                      </div>
                      
                      <div className="mt-auto w-full">
                        <div className="text-sm text-gray-500 mb-2">Review #{currentReview + 1} of {reviews.length}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mb-16">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview 
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {/* Liquid effect dot */}
              {index === currentReview && (
                <motion.div
                  layoutId="liquid-dot"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{
                    borderRadius: '9999px',
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

  
     
      </div>
    </section>
  );
};

export default ReviewsSection;