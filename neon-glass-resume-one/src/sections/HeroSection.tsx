
import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile.ts';
import profileImg from '@/assets/pp.JPG';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { basics } = profileData;

  return (
    <section id="hero" className="section relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent"></div>
      </div>

      <div className="container mx-auto z-10 relative">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <motion.div
            className="relative w-40 h-40 mb-6 rounded-full p-[3px] bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-[0_0_30px_rgba(34,211,238,0.4)] md:w-40 md:h-40 shrink-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -8, 0] }}
            transition={{
              scale: { type: "spring", stiffness: 260, damping: 20, delay: 0.2 },
              opacity: { duration: 0.5, delay: 0.2 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 }
            }}
          >
            <img
              src={profileImg}
              alt={basics.name}
              className="w-full h-full rounded-full object-cover border-4 border-background"
            />
          </motion.div>

          <motion.div
            className="overflow-hidden mb-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Hi, I'm Akshaya
            </h1>
          </motion.div>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-accent mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {basics.title}
          </motion.h2>

          <motion.p
            className="max-w-2xl text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {basics.summary}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            {profileData.resumeUrl && (
              <Button className="neon-gradient text-white flex items-center gap-2" asChild>
                <a href={profileData.resumeUrl} download="Akshaya_Gonala_Tallam_Resume.pdf">
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            )}
            <Button variant="outline" className="glass flex items-center gap-2" asChild>
              <a href="#contact">
                Contact Me <ArrowDown size={16} />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 2,
          y: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }
        }}
      >
        <a href="#about" className="text-muted-foreground flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
