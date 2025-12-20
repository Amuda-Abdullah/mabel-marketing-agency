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
import { GoDotFill } from "react-icons/go";

const About: React.FC = () => {
  const features = [
    {
      icon: <FaChartLine className="text-3xl text-yellow-600" />,
      title: "Data-Driven Campaigns",
      description:
        "We use advanced analytics and market research to create campaigns that deliver measurable results and maximize your book sales.",
      color: "",
    },
    {
      icon: <FaUserEdit className="text-3xl text-yellow-600" />,
      title: "Author-Focused Strategies",
      description:
        "Every author is unique. We craft personalized marketing strategies that align with your brand, genre, and target audience to maximize impact.",
      color: "",
    },
    {
      icon: <FaRocket className="text-3xl text-yellow-600" />,
      title: "Proven Sales Growth",
      description:
        "Our track record speaks for itself. We have helped hundreds of authors achieve bestseller status and build lasting reader communities.",
      color: "",
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
    <section id="about" className="pt-20 bg-gradient-to-b from-gray-50 to-white">
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
                        OUR STORY
                    </div>
          
               <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
                            About Our Book Marketing Agency

            </span>
           
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="flex text-center mx-40">
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
              Our mission is simple: to help you reach more readers, increase sales, and build a loyal fanbase that loves your work. We combine industry expertise with innovative strategies to ensure your book gets the attention it deserves.
            </p>
            
          
          </motion.div>


        </div>

        {/* Divider */}
     

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
         
          
          <div className="grid grid-cols-1 md:grid-cols-3 mt-14 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${feature.color} outline-1 outline outline-[#25242418] rounded-2xl p-8 shadow-lg border border-white hover:shadow-2xl transition-all duration-300 group`}
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