"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const TypewriterTitle = () => {
  const segments = useMemo(
    () => [
      { text: "I'm Lohith Shet. ", className: "text-primary" },
      { text: "Front-end Developer.", className: "text-white" },
    ],
    [],
  );

  const [segmentIndex, setSegmentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedSegments, setTypedSegments] = useState<string[]>(() =>
    segments.map(() => ""),
  );
  const [showCaret, setShowCaret] = useState(true);

  const typingSpeed = 80;
  const segmentPause = 600;

  useEffect(() => {
    if (segmentIndex >= segments.length) {
      return;
    }

    const currentSegment = segments[segmentIndex].text;

    if (charIndex < currentSegment.length) {
      const timeout = setTimeout(() => {
        setTypedSegments((prev) => {
          const next = [...prev];
          next[segmentIndex] = currentSegment.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSegmentIndex((prev) => prev + 1);
      setCharIndex(() => 0);
    }, segmentPause);

    return () => clearTimeout(timeout);
  }, [charIndex, segmentIndex, segments, typingSpeed, segmentPause]);

  useEffect(() => {
    const caretInterval = setInterval(() => {
      setShowCaret((prev) => !prev);
    }, 500);

    return () => clearInterval(caretInterval);
  }, []);

  const typingFinished = segmentIndex >= segments.length;

  return (
    <div className="leading-tight">
      {segments.map((segment, idx) => {
        const isActive = idx === segmentIndex && !typingFinished;
        return (
          <span
            key={segment.text}
            className={`inline-block ${segment.className}`}
          >
            {typedSegments[idx]}
            {isActive && (
              <span
                className={`inline-block w-[3px] h-6 ml-1 bg-primary align-middle ${
                  showCaret ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </span>
        );
      })}
    </div>
  );
};

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image with yellow border frame */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Yellow decorative border */}
            <div className="absolute -top-8 -left-8 w-full h-full border-[20px] border-primary rounded-[40px] z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-full h-full border-[20px] border-primary rounded-[40px] z-0"></div>

            {/* Image container */}
            <motion.div
              className="relative z-10 rounded-[30px] overflow-hidden bg-dark aspect-[3/4] max-w-md mx-auto"
              animate={{ y: [0, -12, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, y: -6 }}
            >
              <Image
                src="/images/lohith.png"
                alt="Lohith Profile"
                fill
                className="object-cover object-center scale-110"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TypewriterTitle />
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-400 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I&apos;m a Tunisian based web designer & front-end developer
              focused on crafting clean & user-friendly experiences. I am
              passionate about building excellent software that improves the
              lives of those around me.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection("about")}
                className="bg-primary text-dark font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                More About Me
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:bg-primary hover:text-dark"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </motion.section>
  );
};

export default Hero;
