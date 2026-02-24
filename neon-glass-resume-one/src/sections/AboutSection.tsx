
import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';
import { Mail, MapPin, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { basics, socialLinks } = profileData;

  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left Side: Decorative Vertical Accent */}
          <motion.div
            className="hidden md:flex flex-col items-center justify-center w-4 lg:w-8 shrink-0 relative"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Glowing Accent Line */}
            <div className="w-1 h-full bg-gradient-to-b from-cyan-500/80 via-purple-500/80 to-transparent rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
            {/* Subtle floating dot */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-0 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            ></motion.div>
          </motion.div>

          {/* Right Side: Content Card */}
          <motion.div
            className="flex-1 w-full relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Subtle Animated Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 pointer-events-none"></div>

            <div className="relative glass p-8 md:p-12 lg:p-14 text-left flex flex-col items-start rounded-3xl border border-white/10 shadow-lg group-hover:shadow-[0_15px_40px_-10px_rgba(34,211,238,0.15)] group-hover:border-cyan-500/30 transition-all duration-500 bg-background/60 backdrop-blur-xl">
              <p className="text-lg md:text-xl leading-[1.8] mb-8 text-foreground/90 font-medium tracking-wide">
                I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 font-bold drop-shadow-sm">{basics.name}</span>, a dedicated Computer Science Engineering student with a strong academic background. I completed my Intermediate education at Sri Gayathri Junior College and am currently pursuing my <span className="bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded-md font-semibold border border-purple-500/20">B.Tech</span> at <span className="bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded-md font-semibold border border-cyan-500/20">KL University</span>, Vijayawada. I am passionate about continuous learning, strengthening my technical skills, and contributing to innovative technology-driven solutions.
              </p>

              <div className="flex items-center gap-3 px-5 py-2.5 mt-2 rounded-full bg-secondary/60 border border-white/5 shadow-sm w-fit transition-all duration-300 hover:border-cyan-500/50 hover:bg-secondary/80 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(34,211,238,0.2)]">
                <Mail className="h-5 w-5 text-cyan-400" />
                <a href={`mailto:${basics.email}`} className="text-sm md:text-base font-semibold hover:text-cyan-300 transition-colors tracking-wide">
                  {basics.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
