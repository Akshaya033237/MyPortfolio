import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const { experiences } = profileData;

  if (experiences.length === 0) return null;

  return (
    <section id="experience" className="section relative">
      <div className="container mx-auto max-w-4xl relative">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-center relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience
            <div className="h-1 w-full bg-accent/20 mt-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </motion.h2>
        </div>

        {/* Central Vertical Glowing Line */}
        <div className="absolute left-8 md:left-1/2 top-40 bottom-0 w-0.5 bg-gradient-to-b from-accent/80 via-accent/30 to-transparent -translate-x-1/2 hidden sm:block md:block blur-[1px]"></div>
        <div className="absolute left-8 md:left-1/2 top-40 bottom-0 w-px bg-accent/50 -translate-x-1/2 hidden sm:block md:block z-0"></div>

        <div className="space-y-12 md:space-y-20 relative z-10 px-4 sm:px-0">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={`${exp.company}-${index}`}
                className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Timeline Dot (Center on wide screens, left on mobile) */}
                <div className="absolute left-4 sm:left-8 md:left-1/2 -translate-x-1/2 top-6 md:top-auto flex items-center justify-center">
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border-2 border-accent/80 shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)] flex items-center justify-center z-20"
                    whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(var(--accent-rgb),0.8)" }}
                  >
                    <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </motion.div>
                </div>

                {/* Content Card (Half width on desktop, full width on mobile with offset) */}
                <div className={`w-full md:w-[calc(50%-3rem)] ml-16 sm:ml-20 md:ml-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass p-6 md:p-8 rounded-2xl border border-border/30 hover:border-accent/50 hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.15)] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                    {/* Subtle background glow effect on hover */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0"></div>

                    <div className="relative z-10">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold font-space text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:neon-gradient transition-all duration-300 inline-block">{exp.title}</h3>
                        <div className="text-lg text-accent mt-1 font-medium">{exp.company}</div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 bg-secondary/50 self-start px-3 py-1.5 rounded-full inline-flex border border-border/50">
                        <CalendarDays className="w-4 h-4 text-accent/80" />
                        <span>
                          {exp.duration || (exp.startDate === exp.endDate || exp.endDate === 'Present' ? (exp.endDate === 'Present' ? `${exp.startDate.split('-')[0]} - Present` : exp.startDate.split('-')[0]) : `${exp.startDate.split('-')[0]} - ${exp.endDate.split('-')[0]}`)}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start text-muted-foreground group-hover:text-foreground/90 transition-colors">
                            <span className="text-accent mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 shadow-[0_0_5px_rgba(var(--accent-rgb),0.8)]"></span>
                            <span className="text-sm md:text-base leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.tags && exp.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                          {exp.tags.map((tag, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="bg-secondary/30 hover:bg-accent/10 border-border/50 hover:border-accent/40 text-xs py-1 transition-colors"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
