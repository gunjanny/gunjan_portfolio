import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  BookOpen, 
  Code, 
  Layers, 
  CheckCircle2, 
  PlusCircle, 
  ArrowUpRight 
} from 'lucide-react';
import { achievements } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Award,
  Sparkles,
  BookOpen,
  Medal: Trophy,
  Code,
  Layers,
};

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Certifications', 'Hackathons', 'Courses', 'Awards', 'Other'];

  const filteredAchievements = activeCategory === 'All'
    ? achievements
    : achievements.filter(item => item.category === activeCategory);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Honors, Courses & <span className="gradient-text-primary">Achievements</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Recognitions, technical certifications, academic achievements, and hackathons.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30 scale-105'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award;

            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/40 group relative overflow-hidden transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Icon, Category Pill, Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {item.year}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {item.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                  <span className="capitalize">{item.category}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500/70" />
                </div>
              </div>
            );
          })}

          {/* Placeholder Card for Future Additions */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-center items-center text-center border-2 border-dashed border-slate-300 dark:border-slate-700/60 hover:border-indigo-400/60 transition-all p-6 group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-base mb-1">
              Next Milestone in Progress
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              New certifications, AI workshops, and university competitions will be added here as I continue my B.Tech journey.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
