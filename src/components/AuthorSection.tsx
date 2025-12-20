// components/AuthorsSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

interface Author {
  id: number;
  name: string;
  genre: string;
  books: string;
  status: string;
  color: string;
}

const AuthorsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const duplicatedAuthorsRef = useRef<HTMLDivElement>(null);

  const authors: Author[] = [
    {
      id: 1,
      name: "Lisa Chen",
      genre: "Sci-Fi",
      books: "7 Books",
      status: "Amazon Bestseller",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "Daniel Martinez",
      genre: "Historical Fiction",
      books: "11 Books",
      status: "Kindle Unlimited",
      color: "from-amber-500 to-amber-600",
    },
    {
      id: 3,
      name: "Jennifer Blake",
      genre: "Romance",
      books: "12 Books",
      status: "Amazon Bestseller",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 4,
      name: "Michael Torres",
      genre: "Thriller",
      books: "8 Books",
      status: "Kindle Unlimited",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 5,
      name: "Alexandra Rhodes",
      genre: "Fantasy",
      books: "9 Books",
      status: "Amazon Bestseller",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: 6,
      name: "Robert Chen",
      genre: "Mystery",
      books: "6 Books",
      status: "Kindle Unlimited",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  // Duplicate authors for seamless scrolling
  const allAuthors = [...authors, ...authors, ...authors];

  return (
    <section id="authors" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
                                    SUCCESS STORIES
                                </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Authors We've Worked With
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful authors who have transformed their book sales and built thriving reader communities with our help.
          </p>
        </motion.div>

        {/* Auto-scrolling Carousel */}
        <div 
          className="relative overflow-hidden mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling Container */}
          <div
            ref={containerRef}
            className={`flex gap-6 ${
              !isPaused ? "animate-scroll" : ""
            }`}
            style={{
              animationDuration: "40s", // Slow speed for better readability
            }}
          >
            {allAuthors.map((author, index) => (
              <div
                key={`${author.id}-${index}`}
                className="flex-shrink-0 w-64"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Author Avatar */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${author.color} mx-auto flex items-center justify-center`}>
                      <span className="text-white text-xl font-bold">
                        {author.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {author.name}
                    </h3>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-sm font-medium text-gray-700">
                        {author.genre}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-gray-600">
                        <span className="font-medium">{author.books}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {author.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default AuthorsSection;