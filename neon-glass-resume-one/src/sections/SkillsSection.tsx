import React from 'react';
import { motion } from 'framer-motion';
import profileData from '@/data/profile';
import {
  Code2, Coffee, FileCode2, FileCode, Paintbrush,
  Network, Waypoints, Monitor, Database, DatabaseZap,
  GitBranch, Github, Code, Moon, Terminal, Binary
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  const { skills } = profileData;

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Skip rendering if no skills
  if (skills.length === 0) return null;

  // Category titles formatted
  const categoryTitles: Record<string, string> = {
    programming: "Programming",
    core: "Core Computer Science",
    database: "Database",
    tools: "Tools"
  };

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'C': return <Terminal className="w-8 h-8 mb-3 text-cyan-400 group-hover:text-accent transition-colors" />;
      case 'C++': return <Binary className="w-8 h-8 mb-3 text-blue-400 group-hover:text-accent transition-colors" />;
      case 'Java': return <Coffee className="w-8 h-8 mb-3 text-orange-400 group-hover:text-accent transition-colors" />;
      case 'JavaScript': return <FileCode2 className="w-8 h-8 mb-3 text-yellow-400 group-hover:text-accent transition-colors" />;
      case 'HTML': return <FileCode className="w-8 h-8 mb-3 text-orange-500 group-hover:text-accent transition-colors" />;
      case 'CSS': return <Paintbrush className="w-8 h-8 mb-3 text-blue-500 group-hover:text-accent transition-colors" />;
      case 'Data Structures': return <Network className="w-8 h-8 mb-3 text-purple-400 group-hover:text-accent transition-colors" />;
      case 'Algorithms': return <Waypoints className="w-8 h-8 mb-3 text-pink-400 group-hover:text-accent transition-colors" />;
      case 'Operating Systems': return <Monitor className="w-8 h-8 mb-3 text-gray-400 group-hover:text-accent transition-colors" />;
      case 'DBMS': return <Database className="w-8 h-8 mb-3 text-green-400 group-hover:text-accent transition-colors" />;
      case 'SQL': return <Database className="w-8 h-8 mb-3 text-blue-300 group-hover:text-accent transition-colors" />;
      case 'PostgreSQL': return <DatabaseZap className="w-8 h-8 mb-3 text-blue-500 group-hover:text-accent transition-colors" />;
      case 'Git': return <GitBranch className="w-8 h-8 mb-3 text-orange-600 group-hover:text-accent transition-colors" />;
      case 'GitHub': return <Github className="w-8 h-8 mb-3 text-gray-300 group-hover:text-accent transition-colors" />;
      case 'VS Code': return <Code className="w-8 h-8 mb-3 text-blue-500 group-hover:text-accent transition-colors" />;
      case 'Eclipse': return <Moon className="w-8 h-8 mb-3 text-indigo-400 group-hover:text-accent transition-colors" />;
      default: return <Code2 className="w-8 h-8 mb-3 text-accent group-hover:text-accent transition-colors" />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-center relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
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

        <div className="space-y-16">
          {Object.entries(categories).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <h3 className="text-2xl font-space mb-6 text-center text-muted-foreground">{categoryTitles[category] || category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center p-6 rounded-2xl glass border border-border/20 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.15)] transition-all duration-300 hover:-translate-y-1 aspect-square"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                  >
                    {getSkillIcon(skill.name)}
                    <span className="font-medium text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
