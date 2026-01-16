// App.tsx
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  easeOut,
} from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ServicesSection from "./components/ServiceSection";
import TeamSection from "./components/TeamSection";
import AuthorsSection from "./components/AuthorSection";
import ReviewsSection from "./components/ReviewSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

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
          <HeroSection smoothScrollTo={smoothScrollTo} />

      {/* Other sections would continue here... */}
      <AnimatedSection id="about" className=" bg-white">
        <div className="">
          <About />
        </div>
      </AnimatedSection>
      <AnimatedSection id="services" className="">
        <div className="">
          <ServicesSection />
        </div>
      </AnimatedSection>
      <AnimatedSection id="team" className="">
        <div className="">
          <TeamSection />
        </div>
      </AnimatedSection>
      <AnimatedSection id="authors" className="">
        <div className="">
          <AuthorsSection />
        </div>
      </AnimatedSection>
      <AnimatedSection id="reviews" className="">
        <div className="">
          <ReviewsSection />
        </div>
      </AnimatedSection>
      <AnimatedSection id="contact" className="">
        <div className="">
          <ContactSection />
        </div>
      </AnimatedSection>

<Footer />
      {/* Continue with Services, Team, Authors, Reviews, Contact sections... */}
    </div>
  );
};

export default App;