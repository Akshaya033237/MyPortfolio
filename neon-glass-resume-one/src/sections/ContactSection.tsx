import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section relative py-32 overflow-hidden">
      {/* Remove the generic container and build a powerful centered glassmorphism box */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[50vh]">

        <motion.div
          className="w-full max-w-4xl relative group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Glow Backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl opacity-50 group-hover:opacity-100 blur-xl transition-all duration-1000 animate-pulse-slow"></div>

          <div className="relative glass p-10 md:p-16 rounded-3xl border border-white/10 dark:border-white/5 shadow-2xl backdrop-blur-2xl text-center flex flex-col items-center justify-center overflow-hidden">

            {/* Very Subtle Floating Animation for Content */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-full flex flex-col items-center z-10"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-space tracking-tight leading-tight text-center text-foreground/90 max-w-3xl mb-12">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-gradient-x block mb-4">
                  Curious. Driven. Impact-oriented.
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/80 block leading-relaxed">
                  Building meaningful tech<br />that solves real problems.
                </span>
              </h2>

              <div className="h-px w-24 bg-gradient-to-r from-cyan-500/0 via-accent to-purple-500/0 my-8"></div>

              <p className="text-sm md:text-base text-accent/80 uppercase tracking-widest font-semibold mb-10">
                Open to internships, collaborations, and exciting opportunities.
              </p>

              <a
                href="mailto:2300033237cseh@gmail.com"
                className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-white rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 overflow-hidden transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] group/btn"
              >
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  Let's Connect
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>

                {/* Button Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite] transition-all"></div>
              </a>

              {/* Connect With Me Subsection */}
              <div className="mt-16 w-full flex flex-col items-center">
                <h3 className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em] font-medium mb-6">
                  Connect With Me
                </h3>
                <div className="flex justify-center gap-6">
                  {profileData.socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target={link.platform === 'Email' ? undefined : "_blank"}
                      rel={link.platform === 'Email' ? undefined : "noopener noreferrer"}
                      className="group/icon relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-600 to-purple-600 shadow-[0_4px_15px_rgba(34,211,238,0.3)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                      title={link.platform}
                    >
                      <div className="text-white z-10 flex items-center justify-center">
                        {link.platform === 'GitHub' && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>}
                        {link.platform === 'LinkedIn' && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>}
                        {link.platform === 'Email' && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>}
                        {link.platform === 'CodeChef' && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>}
                      </div>
                      <div className="absolute inset-0 rounded-full border border-white/20"></div>
                      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover/icon:opacity-20 transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Animated Gradient Line Below Content */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-gradient-x opacity-70"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
