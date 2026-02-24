
import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';
import { CalendarDays, MapPin, Award, GraduationCap, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Helper to render icon by name
const renderIcon = (name?: string) => {
  switch (name) {
    case 'graduation-cap':
      return <GraduationCap className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]" />;
    case 'book-open':
      return <BookOpen className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]" />;
    default:
      return null;
  }
};

const EducationSection: React.FC = () => {
  const { education } = profileData;

  if (education.length === 0) return null;

  return (
    <section id="education" className="section relative">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-center relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Education
            <div className="h-1 w-full bg-accent/20 mt-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              />
            </div>
          </motion.h2>
        </div>

        <div className="space-y-8 relative">
          {/* Subtle vertical connector line */}
          <div className="absolute left-[39px] md:left-[47px] top-10 bottom-10 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden sm:block z-0"></div>

          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${index}`}
              className="relative z-10 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              {/* Animated Background Gradient Accent */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none z-0"></div>

              <div className="relative z-10 glass p-6 md:p-8 rounded-2xl border border-border/30 shadow-sm transition-all duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.02] group-hover:border-accent/50 group-hover:shadow-[0_15px_35px_-10px_rgba(var(--accent-rgb),0.2)] bg-background/60 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Institution Logo / Icon Box */}
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-background border-2 border-accent/40 shadow-[0_0_10px_rgba(var(--accent-rgb),0.1)] transition-transform duration-500 group-hover:scale-[1.05] group-hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] group-hover:border-accent overflow-hidden relative">
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(var(--accent-rgb),0.1)] pointer-events-none z-10"></div>

                      {edu.logo ? (
                        <div className="w-full h-full p-2 flex items-center justify-center bg-white relative">
                          <img src={edu.logo} alt={edu.institution} className="max-w-full max-h-full object-contain drop-shadow-sm" />
                        </div>
                      ) : edu.icon ? (
                        renderIcon(edu.icon)
                      ) : (
                        <span className="text-2xl font-bold font-space text-accent">{edu.institution.charAt(0)}</span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground font-space tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:neon-gradient transition-all duration-300">{edu.institution}</h3>
                        <p className="text-accent text-lg font-medium">{edu.degree} <span className="text-muted-foreground font-normal">in</span> {edu.field}</p>
                      </div>

                      {/* Highlighted Badge for Performance */}
                      <div className="flex-shrink-0 pt-1">
                        {(edu.gpa || edu.percentage) && (
                          <Badge className="bg-slate-900 text-white border border-accent/60 py-1.5 px-4 shadow-[0_0_10px_rgba(var(--accent-rgb),0.3)] text-sm font-semibold rounded-full flex items-center gap-1.5 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)] group-hover:scale-105 group-hover:border-accent">
                            <Award className="w-4 h-4 text-accent" />
                            {edu.gpa ? `CGPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Meta Info (Duration & Location) */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      {edu.duration && (
                        <div className="flex items-center gap-1.5 bg-secondary/30 px-3 py-1 rounded-md border border-border/40 transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5">
                          <CalendarDays className="w-4 h-4 text-accent/80" />
                          <span>{edu.duration}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-1.5 bg-secondary/30 px-3 py-1 rounded-md border border-border/40 transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5">
                        <MapPin className="w-4 h-4 text-accent/80" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Description Section */}
                    {edu.description && (
                      <div className="mt-2 pt-4 border-t border-border/30 transition-colors duration-500 group-hover:border-accent/30">
                        <p className="text-muted-foreground leading-relaxed text-[15px] group-hover:text-foreground/90 transition-colors duration-300">
                          {edu.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
