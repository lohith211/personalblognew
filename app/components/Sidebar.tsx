"use client";

import { Home, User, Briefcase, Mail, BookOpen } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "portfolio", icon: Briefcase, label: "Portfolio" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed right-0 top-0 h-screen w-20 bg-dark-light flex-col items-center justify-center z-50">
        <nav className="flex flex-col gap-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative p-3 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary text-dark"
                    : "text-gray-400 hover:text-primary"
                }`}
                aria-label={item.label}
              >
                <Icon size={24} />
                <span className="absolute right-full mr-4 px-3 py-1 bg-dark-light rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-dark-light z-50 border-t border-dark-lighter">
        <div className="flex justify-around items-center h-16">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center gap-1 p-2 transition-colors duration-300 ${
                  activeSection === item.id ? "text-primary" : "text-gray-400"
                }`}
                aria-label={item.label}
              >
                <Icon size={20} />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
