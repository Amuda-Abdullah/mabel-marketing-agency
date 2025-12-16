// components/AboutSection.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaUserEdit,
  FaRocket,
  FaLightbulb,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa";

const About: React.FC = () => {
  const stats = [
    { number: "4+", label: "Years Experience", icon: "🏆" },
    { number: "500+", label: "Successful Campaigns", icon: "📈" },
    { number: "98%", label: "Client Satisfaction", icon: "😊" },
    { number: "200+", label: "Bestseller Titles", icon: "📚" },
  ];

  const features = [
    {
      icon: <FaChartLine className="text-3xl text-blue-600" />,
      title: "Data-Driven Campaigns",
      description:
        "We use advanced analytics and market research to create campaigns that deliver measurable results and maximize your book sales.",
      color: "from-blue-50 to-blue-100",
    },
    {
      icon: <FaUserEdit className="text-3xl text-purple-600" />,
      title: "Author-Focused Strategies",
      description:
        "Every author is unique. We craft personalized marketing strategies that align with your brand, genre, and target audience to maximize impact.",
      color: "from-purple-50 to-purple-100",
    },
    {
      icon: <FaRocket className="text-3xl text-green-600" />,
      title: "Proven Sales Growth",
      description:
        "Our track record speaks for itself. We have helped hundreds of authors achieve bestseller status and build lasting reader communities.",
      color: "from-green-50 to-green-100",
    },
  ];

  const principles = [
    {
      icon: <FaLightbulb className="text-2xl text-yellow-600" />,
      title: "Innovation",
      description: "Staying ahead with cutting-edge marketing techniques",
    },
    {
      icon: <FaBullseye className="text-2xl text-red-600" />,
      title: "Precision",
      description: "Targeted strategies for maximum impact",
    },
    {
      icon: <FaHandshake className="text-2xl text-indigo-600" />,
      title: "Partnership",
      description: "Working together towards your success",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              About Our Book Marketing Agency
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a dedicated team of book marketing professionals passionate about helping authors succeed. With over 4 years of experience and 500+ successful campaigns, we understand what it takes to make your book stand out in today's competitive market.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is simple: to help you reach more readers, increase sales, and build a loyal fanbase that loves your work. We combine industry expertise with innovative strategies to ensure your book gets the attention it deserves.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Core Principles
              </h3>
              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">{principle.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-800">{principle.title}</h4>
                      <p className="text-gray-600 text-sm">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-2xl">{stat.icon}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12"
        />

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
              Why Authors Choose Us
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${feature.color} rounded-2xl p-8 shadow-lg border border-white hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;