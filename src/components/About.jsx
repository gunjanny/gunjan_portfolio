import React from 'react';
import { 
  User, 
  GraduationCap, 
  Sparkles, 
  Code, 
  Brain, 
  Target, 
  Compass, 
  MapPin, 
  Rocket, 
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      
      {/* Decorative blurred background shapes */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Passionate About Tech, AI & <span className="gradient-text-primary">Continuous Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A student-friendly look into my journey, core technical interests, and motivation behind the code I write.
          </p>
        </div>

        {/* Main Grid: Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 h-full flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Curiosity-Driven Engineering
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      B.Tech Student at JECRC University, Jaipur
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  Hello! I'm <strong className="text-slate-900 dark:text-white font-semibold">{personalInfo.name}</strong>, a B.Tech student pursuing Electronics and Communication Engineering (ECE) at <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">JECRC University</strong> in Jaipur, India.
                </p>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  I am fascinated by how rapidly computing is evolving. My journey is rooted in an interest in <strong>artificial intelligence</strong>, <strong>modern web engineering</strong>, and <strong>digital productivity</strong>. I believe that true mastery comes from active experimentation — which is why I consistently translate textbook theory into practical web applications and AI tools.
                </p>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  Before stepping into engineering, I completed my schooling at <strong>Sophia School, Jaipur</strong> with an 82% score in Physics, Chemistry, and Mathematics (PCM). That analytical rigor continues to shape my approach to structured programming, algorithmic logic, and UI design.
                </p>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-center">
                  <span className="block text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    2026-30
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    B.Tech ECE Cohort
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-center">
                  <span className="block text-xl font-extrabold text-cyan-600 dark:text-cyan-400">
                    82% PCM
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Sophia School (XII)
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-center">
                  <span className="block text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    100%
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Dedication to Learning
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Areas Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {personalInfo.aboutBullets.map((item, idx) => {
              const icons = [Brain, Code, Lightbulb, Target];
              const IconComponent = icons[idx % icons.length];
              return (
                <div 
                  key={idx}
                  className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex items-start gap-4 hover:border-indigo-500/40 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-gradient-to-tr from-indigo-600/10 to-cyan-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
