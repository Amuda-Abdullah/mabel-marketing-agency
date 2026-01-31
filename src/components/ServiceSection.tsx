// components/ServicesSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaChartLine,
  FaCrown,
  FaStar,
  FaChevronRight,
  FaCheck,
  FaUsers,
  FaBullseye,
  FaTrophy,
  FaGem,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaAccessibleIcon } from "react-icons/fa6";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  category: string;
  popular?: boolean;
  ctaText?: string;
}

const ServicesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const services: Service[] = [
    {
      id: 1,
      icon: <FaRocket className="text-2xl" />,
      title: "Starter Launch",
      tagline: "Perfect for new authors testing the waters",
      description: "Get your book off the ground with essential marketing basics and initial reader engagement.",
      price: "$250",
      duration: "Basic Campaign",
      features: [
        "Basic Book Audit",
        "10-15 Goodreads reviews from real readers",
        "1 week social media posts (3-4 posts)",
        "Basic email announcement template",
        "Goodreads Listopia listings (up to 10 lists)",
        "Campaign performance report"
      ],
      category: "budget",
      ctaText: "Start Basic",
    },
    {
      id: 2,
      icon: <FaChartLine className="text-2xl" />,
      title: "Growth Accelerator",
      tagline: "Build momentum and consistency",
      description: "Expand your reach with more comprehensive marketing and consistent social media presence.",
      price: "$500",
      duration: "2-Week Campaign",
      features: [
        "2 weeks social media (10-12 posts)",
        "Readers and influencer outreach",
        "20-30 Goodreads reviews from real readers",
        "Email campaign (2 emails)",
        "Goodreads Listopia listings (up to 15 lists)",
        "Campaign performance report"
      ],
      category: "budget",
      popular: true,
      ctaText: "Accelerate Growth",
    },
    {
      id: 3,
      icon: <FaBullseye className="text-2xl" />,
      title: "Professional Campaign",
      tagline: "Comprehensive marketing for serious authors",
      description: "Full-scale marketing with targeted outreach and professional content strategy.",
      price: "$750",
      duration: "3-Week Campaign",
      features: [
        "Everything in Growth Accelerator, plus:",
        "Targeted promotion in high traffic communities",
        "2-3 weeks social media (20 posts)",
        "35-40 Goodreads reviews from real readers",
        "Book blogger outreach (15-20 contacts)",
        "Email campaign (reads list)",
        "Goodreads Listopia listings (up to 25 lists)"
      ],
      category: "popular",
      ctaText: "Go Professional",
    },
    {
      id: 4,
      icon: <FaTrophy className="text-2xl" />,
      title: "Bestseller Blueprint",
      tagline: "Strategic launch for maximum visibility",
      description: "Designed to push your book toward bestseller status with verified reviews and extensive outreach.",
      price: "$1,000",
      duration: "4-Week Campaign",
      features: [
        "3-4 weeks social media (30 posts)",
        "2-3 Verified Amazon reviews",
        "Blogger outreach (30-40 contacts)",
        "40-50 Goodreads reviews from real readers",
        "Full targeted email campaign",
        "Goodreads Listopia listings (up to 35 lists)",
        "Custom Amazon QR code mockup"
      ],
      category: "popular",
      popular: true,
      ctaText: "Blueprint Success",
    },
    {
      id: 5,
      icon: <FaCrown className="text-2xl" />,
      title: "Authority Platform",
      tagline: "Build a lasting author brand",
      description: "Establish yourself as an authority in your genre with comprehensive brand building.",
      price: "$1,500",
      duration: "6-Week Campaign",
      features: [
        "Everything in Bestseller Blueprint, plus:",
        "4-6 weeks social media (45 posts)",
        "5-7 Verified Amazon reviews",
        "Short book trailer for quick attention grab",
        "70+ Goodreads reviews from real readers",
        "Custom Amazon QR code mockup",
        "Enhanced campaign performance analysis"
      ],
      category: "premium",
      ctaText: "Build Authority",
    },
    {
      id: 6,
      icon: <FaGem className="text-2xl" />,
      title: "Premium Launch System",
      tagline: "Full-service marketing for ambitious authors",
      description: "Complete marketing ecosystem for authors ready to dominate their genre.",
      price: "$2,000",
      duration: "8-Week Campaign",
      features: [
        "Everything in Authority Platform, plus:",
        "7-8 weeks social media (45 posts)",
        "10+ Verified Amazon reviews",
        "Professional book trailer",
        "90+ Goodreads reviews from real readers",
        "Complete sales funnel",
        "Advanced campaign optimization"
      ],
      category: "premium",
      ctaText: "Launch Premium",
    },
    {
      id: 7,
      icon: <FaAccessibleIcon className="text-2xl" />,
      title: "Ultimate Author Accelerator",
      tagline: "The complete author success package",
      description: "All-inclusive marketing and branding for authors serious about long-term success.",
      price: "$2,500",
      duration: "12-Week Campaign",
      features: [
        "Everything in Premium Launch, plus:",
        "10 weeks social media (45 posts)",
        "20+ Verified Amazon reviews",
        "100+ Goodreads reviews from real readers",
        "Custom Amazon QR code mockup",
        "Campaign performance result"
      ],
      category: "Ultimate Package",
      ctaText: "Accelerate Now",
    },
    {
      id: 8,
      icon: <FaStar className="text-2xl" />,
      title: "Legendary Package",
      tagline: "Best seller achiever",
      description: "The ultimate package for authors aiming to become bestsellers.",
      price: "$5,000",
      duration: "15-Week Campaign",
      features: [
        "Everything in Premium Launch, plus:",
        "20 weeks social media (45 posts)",
        "50+ Verified Amazon reviews",
        "250+ Goodreads reviews from real readers",
        "Custom Amazon QR code mockup",
        "Campaign performance result",
        "Author website/rebranding",
        "Free book trailer",
      ],
      category: "Ultimate Package",
      ctaText: "Become a Legend",
    },
  ];

  const stats = [
    { icon: <FaChartLine />, number: "85%", label: "Sales Increase" },
    { icon: <FaStar />, number: "4.9", label: "Client Rating" },
    { icon: <FaUsers />, number: "500+", label: "Authors Helped" },
    { icon: <FaTrophy />, number: "200+", label: "Bestsellers" },
  ];

  const tabs = [
    { id: "all", label: "All Packages" },
    { id: "budget", label: "Starter Packages" },
    { id: "popular", label: "Popular Choice" },
    { id: "premium", label: "Premium Plans" },
  ];

  const filteredServices = services.filter((service) => {
    if (activeTab === "all") return true;
    return service.category === activeTab;
  });

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-[#d4af37] font-semibold tracking-wider uppercase text-sm flex items-center justify-center mb-4">
            <span className="">
              <GoDotFill />
            </span>
            MARKETING PACKAGES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
              Book Marketing Packages
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Choose from our results-driven packages designed to match your goals, budget, and timeline.
            Every package includes personalized strategy and dedicated support.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="text-amber-500">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                </div>
                <div className="text-sm text-gray-600 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 ${
                service.popular ? "ring-2 ring-amber-500" : ""
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100">
                  <div className="text-amber-600">{service.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
              <p className="text-amber-600 font-medium text-sm mb-2">{service.tagline}</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>

              {/* Price & Duration */}
              <div className="mb-4 p-4 bg-gradient-to-r from-gray-50 to-amber-50 rounded-lg border border-amber-100">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                    <div className="text-xs text-gray-500">{service.duration}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6 space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm mb-2">What's Included:</h4>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <FaCheck className="text-green-500 mt-0.5 flex-shrink-0 text-xs" />
                    <span className="text-gray-600 text-xs">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform group relative overflow-hidden ${
                  hoveredCard === service.id || service.popular
                    ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white shadow-lg"
                    : "bg-white border-2 border-gray-800 text-gray-800 hover:shadow-md"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                  {service.ctaText || "Get Started"}
                  <FaChevronRight
                    className={`transition-transform duration-300 text-xs ${
                      hoveredCard === service.id ? "translate-x-1" : ""
                    }`}
                  />
                </span>
                
                {/* Gradient overlay on hover */}
                {hoveredCard === service.id && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Package Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <FaStar className="text-amber-400" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Looking for Custom Pricing?
                </h3>
                <FaStar className="text-amber-400" />
              </div>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                For packages beyond $2,500 or completely custom solutions, schedule a consultation 
                to discuss your specific needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaCrown />
                    Request Custom Quote
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </button>
               
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;