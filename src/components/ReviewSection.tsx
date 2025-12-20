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
      name: "Sarah Mitchell",
      role: "Debut Author",
      rating: 5,
      title: "Professional, Results-Driven, and Worth Every Penny",
      content: "The book launch campaign they created for my debut novel exceeded all expectations. From social media buzz to email marketing, every detail was perfectly executed. My book sold over 5,000 copies in the first month alone!",
      stats: "5,000+ copies sold in first month",
      genre: "Contemporary Fiction",
      avatarColor: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Bestselling Author",
      rating: 5,
      title: "Transformed My Entire Career",
      content: "After working with this team, my backlist titles started selling like never before. Their Amazon optimization strategies increased my monthly revenue by 300% in just 3 months. Absolutely phenomenal!",
      stats: "300% revenue increase in 3 months",
      genre: "Science Fiction",
      avatarColor: "from-green-500 to-green-600",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Romance Author",
      rating: 5,
      title: "Beyond My Wildest Expectations",
      content: "I was skeptical at first, but their targeted Facebook ads brought in readers who actually love my genre. My newsletter grew from 200 to 5,000 subscribers, and my latest book hit #1 in its category!",
      stats: "#1 in Amazon Category",
      genre: "Romance",
      avatarColor: "from-pink-500 to-pink-600",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Thriller Writer",
      rating: 5,
      title: "Worth Every Single Penny",
      content: "The PR outreach they did secured me features in major publications I could never have accessed on my own. The credibility boost alone was worth the investment, but the sales spoke for themselves.",
      stats: "Featured in 10+ publications",
      genre: "Thriller",
      avatarColor: "from-purple-500 to-purple-600",
    },
    {
      id: 5,
      name: "Lisa Zhang",
      role: "Fantasy Author",
      rating: 5,
      title: "A Game-Changer for Indie Authors",
      content: "Their comprehensive marketing plan covered everything from book cover design to launch strategy. The results were astounding - my book became a bestseller and I've built a loyal fanbase that's growing every day.",
      stats: "15,000+ copies sold",
      genre: "Fantasy",
      avatarColor: "from-amber-500 to-amber-600",
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