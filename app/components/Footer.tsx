"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: "#", label: "GitHub" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Instagram, url: "#", label: "Instagram" },
  ];

  return (
    <motion.footer
      className="bg-dark-light py-8 border-t border-dark-lighter"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>by Steve Milner</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-dark rounded-full text-gray-400 hover:text-primary hover:bg-dark-lighter transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
