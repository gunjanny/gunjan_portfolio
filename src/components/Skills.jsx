import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode, 
  Terminal, 
  BrainCircuit, 
  Sparkles, 
  Globe, 
  Zap, 
  Check, 
  Layers
} from 'lucide-react';
import { skills } from '../data/portfolioData';

// Mapping icon names to Lucide icon components
const iconMap = {
  Code2,
  Palette,
  FileCode,
  Terminal,
  BrainCircuit,
  Sparkles,
  Globe,
  Zap,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Languages', 'AI & Tech', 'Tools & Workflow'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      
      {/* Background ambient gradient */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Skills & <span className="gradient-text-primary">Core Competencies</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Modern technologies, AI methodologies, and productivity tools I use to bring ideas to reality.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30 scale-105'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            
            // Determine level progress percentage
            let progress = 85;
            if (skill.level.includes('Advanced')) progress = 92;
            if (skill.level.includes('Proficient')) progress = 82;
            if (skill.level.includes('Enthusiast')) progress = 78;

            return (
              <div
                key={skill.name}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/40 group relative overflow-hidden transition-all duration-300"
              >
                {/* Glow dot on top right */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 group-hover:bg-indigo-500/15 rounded-full blur-xl transition-all duration-300" />

                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500/10 via-indigo-500/20 to-cyan-500/15 dark:from-indigo-500/20 dark:to-cyan-400/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:text-cyan-500 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60">
                      {skill.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Bar: Level Badge & Progress Bar */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Proficiency</span>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                      {skill.level}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Learning Note Pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Continuously expanding skills in Machine Learning, Cloud Services, and Modern Frameworks.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
