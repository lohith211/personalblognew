"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Briefcase, Download, GraduationCap } from "lucide-react";

const personalInfo = [
  { label: "First Name", value: "Steve" },
  { label: "Last Name", value: "Milner" },
  { label: "Age", value: "27 Years" },
  { label: "Nationality", value: "Tunisian" },
  { label: "Freelance", value: "Available", highlight: true },
  { label: "Address", value: "Tunis" },
  { label: "Phone", value: "+21621184010" },
  { label: "Email", value: "you@mail.com" },
  { label: "Skype", value: "steve.milner" },
  { label: "Languages", value: "French, English" },
];

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "97+", label: "Completed Projects" },
  { value: "81+", label: "Happy Customers" },
  { value: "53+", label: "Awards Won" },
];

const StatValue = ({ value }: { value: string }) => {
  const numericPart = Number(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.slice(String(numericPart).length);
  const spanRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(spanRef, { once: true, amount: 0.7 });

  useEffect(() => {
    if (!spanRef.current || !isInView) return;

    const controls = animate(0, numericPart, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (spanRef.current) {
          const rounded = Math.round(latest);
          spanRef.current.textContent = `${rounded}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, numericPart, suffix]);

  return (
    <span ref={spanRef} className="text-4xl font-bold text-primary mb-2 block">
      {`0${suffix}`}
    </span>
  );
};

const skills = [
  { name: "HTML", value: 91 },
  { name: "JavaScript", value: 89 },
  { name: "CSS", value: 86 },
  { name: "React", value: 92 },
  { name: "Next.js", value: 88 },
  { name: "Tailwind", value: 84 },
  { name: "UI/UX", value: 76 },
  { name: "Accessibility", value: 70 },
];

const experiences = [
  {
    period: "2018 - Present",
    title: "Web Developer",
    company: "Envato",
    description:
      "Crafting modern interfaces and robust front-end architectures for global brands.",
  },
  {
    period: "2013 - 2018",
    title: "UI/UX Designer",
    company: "ThemeForest",
    description:
      "Designed and delivered user-centric experiences for high-traffic marketplace products.",
  },
  {
    period: "2005 - 2013",
    title: "Consultant",
    company: "VideoHive",
    description:
      "Advised cross-functional teams on motion graphics and interactive media projects.",
  },
];

const education = [
  {
    period: "2015",
    title: "Engineering Degree",
    company: "Oxford University",
    description:
      "Specialised in software engineering with a focus on front-end development strategies.",
  },
  {
    period: "2012",
    title: "Master Degree",
    company: "Kiev University",
    description:
      "Explored human-computer interaction and advanced UI prototyping methodologies.",
  },
  {
    period: "2009",
    title: "Bachelor Degree",
    company: "Tunis High School",
    description:
      "Graduated with honours in science, laying the foundation for technology-focused studies.",
  },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-dark-light py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-center mb-20"
        >
          <span className="absolute inset-x-0 -top-8 text-6xl md:text-7xl lg:text-8xl font-black uppercase text-dark/10 tracking-[0.4em] pointer-events-none select-none">
            Resume
          </span>
          <span className="text-sm uppercase tracking-[0.4em] text-gray-500 block mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Personal <span className="text-primary">Resume</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark rounded-3xl p-8 lg:p-10 shadow-xl shadow-black/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Personal Infos
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mb-8">
              {personalInfo.map((info, index) => (
                <div key={index} className="text-sm md:text-base text-gray-400">
                  <span className="text-white font-semibold">
                    {info.label}:
                  </span>{" "}
                  <span
                    className={
                      info.highlight
                        ? "text-emerald-400 font-semibold"
                        : "text-gray-400"
                    }
                  >
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-primary text-dark font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark rounded-3xl border border-dark-lighter p-8 text-center flex flex-col justify-center"
              >
                <StatValue value={stat.value} />
                <span className="text-gray-400 text-sm uppercase tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            My Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const angle = (skill.value / 100) * 360;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <motion.div
                    className="relative w-28 h-28"
                    initial={{ "--progress": 0 } as any}
                    whileInView={{ "--progress": angle } as any}
                    transition={{ duration: 1.2, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    style={{ "--progress": 0 } as CSSProperties}
                  >
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "conic-gradient(#ffb400 calc(var(--progress)*1deg), rgba(255, 180, 0, 0.08) calc(var(--progress)*1deg))",
                      }}
                    ></div>
                    <div className="absolute inset-2 bg-dark rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {skill.value}%
                      </span>
                    </div>
                  </motion.div>
                  <span className="text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-primary" size={28} />
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-dark border border-dark-lighter rounded-3xl p-8 overflow-hidden"
                >
                  <span className="absolute left-6 top-6 text-xs font-semibold uppercase tracking-wider text-primary/80">
                    {item.period}
                  </span>
                  <div className="pl-0 pt-10">
                    <h4 className="text-xl font-semibold text-white">
                      {item.title} —{" "}
                      <span className="text-gray-300">{item.company}</span>
                    </h4>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-dark border border-dark-lighter rounded-3xl p-8 overflow-hidden"
                >
                  <span className="absolute left-6 top-6 text-xs font-semibold uppercase tracking-wider text-primary/80">
                    {item.period}
                  </span>
                  <div className="pl-0 pt-10">
                    <h4 className="text-xl font-semibold text-white">
                      {item.title} —{" "}
                      <span className="text-gray-300">{item.company}</span>
                    </h4>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
