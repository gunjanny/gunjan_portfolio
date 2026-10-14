import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Cpu, 
  Binary, 
  Sparkles
} from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Education & <span className="gradient-text-primary">Learning Journey</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A strong foundation in engineering principles, computer science, and STEM sciences.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((item, index) => {
            const isCollege = index === 0;

            return (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300"
              >
                {/* Accent top border strip */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${
                    isCollege 
                      ? 'from-indigo-600 via-indigo-500 to-cyan-400' 
                      : 'from-cyan-500 via-emerald-400 to-indigo-500'
                  }`} 
                />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  
                  {/* Title & Institution */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 inline-block">
                        {isCollege ? <Cpu className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-slate-600 dark:text-slate-300 pt-1">
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                        {item.institution}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Year / Status Badge */}
                  <div className="flex flex-row md:flex-col items-start md:items-end gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      <Calendar className="w-3 h-3" />
                      {item.duration}
                    </span>
                    {item.grade && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        <Award className="w-3 h-3" />
                        {item.grade}
                      </span>
                    )}
                    {item.status === 'Pursuing' && (
                      <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                        <Sparkles className="w-3 h-3" />
                        Currently Pursuing
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Relevant Learning Areas */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                    <Binary className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Relevant Learning Areas & Coursework:</span>
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {item.learningAreas.map((area, aIdx) => (
                      <span 
                        key={aIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-indigo-400/50 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                      >
                        <CheckCircle2 className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
