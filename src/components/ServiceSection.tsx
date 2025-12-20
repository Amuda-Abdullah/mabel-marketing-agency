// components/ServicesSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaAmazon,
  FaRocket,
  FaUserTie,
  FaEye,
  FaFacebook,
  FaEnvelope,
  FaChevronRight,
  FaCheck,
  FaStar,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const ServicesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <FaAmazon className="text-2xl" />,
      title: "Amazon & Kindle Promotion",
      tagline: "Dominate the Amazon Marketplace",
      description:
        "Maximize your visibility on Amazon and Kindle with targeted campaigns, keyword optimization, and strategic pricing to boost your rankings and sales.",
      price: "From $499",
      features: [
        "Amazon SEO Optimization",
        "Kindle Category Domination",
        "Amazon Ads Management",
        "Sales Rank Improvement",
      ],
      popular: true,
    },
    {
      id: 2,
      icon: <FaRocket className="text-2xl" />,
      title: "Book Launch Campaigns",
      tagline: "Launch with Maximum Impact",
      description:
        "Launch your book with impact. We create comprehensive pre-launch and launch strategies that generate buzz, build anticipation, and drive initial sales.",
      price: "From $799",
      features: [
        "Pre-Launch Marketing",
        "Launch Day Strategy",
        "Media Outreach",
        "Initial Sales Push",
      ],
    },
    {
      id: 3,
      icon: <FaUserTie className="text-2xl" />,
      title: "Author Branding",
      tagline: "Build Your Author Identity",
      description:
        "Build a powerful author brand that resonates with readers. From logo design to social media presence, we help you establish a memorable identity.",
      price: "From $599",
      features: [
        "Brand Identity Design",
        "Author Website",
        "Social Media Setup",
        "Brand Guidelines",
      ],
    },
    {
      id: 4,
      icon: <FaEye className="text-2xl" />,
      title: "Reviews & Visibility Growth",
      tagline: "Boost Your Online Presence",
      description:
        "Increase your book reviews and online visibility through ethical outreach campaigns, reader engagement strategies, and influencer partnerships.",
      price: "From $399",
      features: [
        "Review Campaign Management",
        "Influencer Outreach",
        "Visibility Strategy",
        "Reader Engagement",
      ],
    },
    {
      id: 5,
      icon: <FaFacebook className="text-2xl" />,
      title: "Social Media Ads for Books",
      tagline: "Target Your Perfect Readers",
      description:
        "Reach your target readers with precision-targeted Facebook, Instagram, and TikTok ads designed to convert browsers into buyers.",
      price: "From $699",
      features: [
        "Multi-Platform Campaigns",
        "Audience Targeting",
        "Ad Creative Design",
        "Performance Analytics",
      ],
    },
    {
      id: 6,
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Marketing for Authors",
      tagline: "Nurture Your Reader Community",
      description:
        "Build and nurture your reader list with engaging email campaigns that keep your audience excited about your current and upcoming releases.",
      price: "From $449",
      features: [
        "Email List Building",
        "Campaign Strategy",
        "Newsletter Design",
        "Automation Setup",
      ],
    },
  ];

  const stats = [
    { icon: <FaChartLine />, number: "85%", label: "Sales Increase" },
    { icon: <FaStar />, number: "4.9", label: "Client Rating" },
    { icon: <FaUsers />, number: "500+", label: "Authors Helped" },
    { icon: <FaRocket />, number: "200+", label: "Bestsellers" },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
              SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
              Complete Book Marketing
              Solutions
            </span>
           
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of services designed to boost your book sales and
            build your author platform.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="text-amber-500">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                </div>
                <div className="text-sm text-gray-600 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 ${
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
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100">
                  <div className="text-amber-600">{service.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-amber-600 font-medium mb-3">{service.tagline}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                <div className="text-sm text-gray-500">per campaign</div>
              </div>

              {/* Features */}
              <div className="mb-8 space-y-3">
                <h4 className="font-semibold text-gray-800">Includes:</h4>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <FaCheck className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform group relative overflow-hidden ${
                  hoveredCard === service.id
                    ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white shadow-lg"
                    : "bg-white border-2 border-gray-800 text-gray-800 hover:shadow-md"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <FaChevronRight
                    className={`transition-transform duration-300 ${
                      hoveredCard === service.id ? "translate-x-1" : ""
                    }`}
                  />
                </span>
                
                {/* Gold gradient overlay on hover */}
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

        {/* Footer CTA */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not Sure Which Service is Right For You?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation and let our experts create a custom marketing plan
              tailored to your specific goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="relative z-10">Book a Free Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-semibold text-lg transition-all duration-300">
                View All Packages
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ServicesSection;