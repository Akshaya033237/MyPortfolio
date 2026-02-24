import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileData from '@/data/profile';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ChevronDown, Rocket } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const { projects } = profileData;
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  if (projects.length === 0) return null;

  const toggleExpand = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  // Staggered list variants for Key Features
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <section id="projects" className="section relative">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-center relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Projects
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

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-10">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.title;

            return (
              <motion.div
                key={project.title}
                className="w-full md:w-[45%] flex flex-col group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                layout
              >
                {/* Slow moving animated gradient accent behind the card effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/30 via-transparent to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none z-0"></div>

                <motion.div
                  className={`relative z-10 glass rounded-2xl border transition-all duration-500 flex flex-col h-full bg-background/40 backdrop-blur-xl ${isExpanded
                      ? "border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.25)] scale-[1.02] -translate-y-2"
                      : "border-border/30 hover:border-cyan-400/40 hover:shadow-[0_15px_35px_-5px_rgba(34,211,238,0.15)] hover:scale-[1.02] hover:-translate-y-2 cursor-pointer"
                    }`}
                  onClick={() => !isExpanded && toggleExpand(project.title)}
                  layout
                >
                  <motion.div className="p-6 md:p-8 flex flex-col flex-grow relative z-10" layout>
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <motion.h3 className="text-xl md:text-2xl font-bold font-space" layout>
                        {project.title}
                      </motion.h3>
                      {project.inDevelopment && (
                        <Badge variant="outline" className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 hover:text-amber-400 border-amber-500/30 whitespace-nowrap shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                          <Rocket className="w-3 h-3 mr-1" />
                          In Development
                        </Badge>
                      )}
                    </div>

                    <motion.p className="text-muted-foreground mb-4 flex-grow leading-relaxed" layout>
                      {project.description}
                    </motion.p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: "1.5rem" }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="pt-2 overflow-hidden flex flex-col gap-6"
                        >
                          {/* Colored Divider */}
                          <div className="h-px w-full bg-gradient-to-r from-cyan-500/10 via-cyan-500/40 to-cyan-500/10 mb-2"></div>

                          <div>
                            <h4 className="text-lg font-semibold text-cyan-300/90 mb-4 flex items-center gap-2">
                              <span className="text-xl">✨</span> Key Features
                            </h4>
                            <motion.ul
                              className="space-y-3"
                              variants={listVariants}
                              initial="hidden"
                              animate="show"
                            >
                              {project.keyFeatures?.map((feature, i) => (
                                <motion.li key={i} variants={itemVariants} className="flex items-start text-muted-foreground text-sm">
                                  <span className="text-cyan-400 mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0 shadow-[0_0_5px_rgba(34,211,238,0.5)]"></span>
                                  <span className="leading-relaxed">{feature}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>

                          {/* Colored Divider */}
                          <div className="h-px w-full bg-gradient-to-r from-purple-500/10 via-purple-500/40 to-purple-500/10 mt-2 mb-2"></div>

                          <div>
                            <h4 className="text-lg font-semibold text-purple-300/90 mb-4 flex items-center gap-2">
                              <span className="text-xl">🛠</span> Technologies
                            </h4>
                            <div className="flex flex-wrap gap-3 mt-1">
                              {project.tags.map((tag, i) => (
                                <Badge
                                  key={i}
                                  className="bg-slate-900 text-white border border-cyan-400 font-semibold py-1.5 px-4 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] hover:border-cyan-200 tracking-wide hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-4 pt-4">
                            {project.repoUrl && (
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium px-4 py-2 rounded-lg glass border border-border/50 hover:border-cyan-400/60 hover:text-cyan-400 transition-colors flex items-center gap-2 shadow-sm hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Source Code
                                <Github size={14} />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div
                      className={`flex justify-center mt-auto pt-4 ${isExpanded ? 'border-t border-border/30' : ''}`}
                      layout
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(project.title);
                        }}
                        className="flex items-center justify-center p-2 rounded-full hover:bg-secondary/80 text-muted-foreground hover:text-cyan-400 transition-colors"
                        aria-label={isExpanded ? "Collapse project details" : "Expand project details"}
                      >
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
