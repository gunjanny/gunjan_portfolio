import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Sparkles, 
  Code2, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  Download,
  BookOpen
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background ambient gradient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-cyan-500/15 dark:bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-[350px] h-[350px] bg-purple-500/15 dark:bg-purple-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Location Pill */}
            <div className="inline-flex items-center flex-wrap gap-2 px-3 py-1.5 rounded-full glass-panel border border-indigo-200/50 dark:border-indigo-500/20 text-xs font-medium text-slate-700 dark:text-slate-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Available for Opportunities</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3 h-3 text-rose-500" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="gradient-text-primary capitalize">
                {personalInfo.name}
              </span>
            </h1>

            {/* Role / Tagline */}
            <div className="inline-flex items-center gap-2 text-lg sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-5">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span>{personalInfo.title}</span>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {personalInfo.headline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* View Projects */}
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Contact Me */}
              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 glass-card hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-700 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold font-mono">
                Connect with me:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 glass-card hover:border-indigo-400/50 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 glass-card hover:border-indigo-400/50 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 glass-card hover:border-indigo-400/50 transition-all"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Tech Card / Code Preview */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Glassmorphism Code Card */}
            <div className="w-full max-w-md rounded-2xl glass-panel shadow-2xl border border-slate-200/80 dark:border-white/10 overflow-hidden relative group">
              
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-slate-100/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                  <span>gunjan-dev.config.json</span>
                </div>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium">
                  v1.0.0
                </span>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed space-y-3 bg-slate-50/50 dark:bg-[#0d1326]/60">
                <p className="text-slate-400 dark:text-slate-500">// Student & Developer Profile</p>
                <div>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">const</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-300 font-semibold">developer</span> = &#123;
                </div>
                
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">name:</span>{" "}
                    <span className="text-amber-600 dark:text-amber-300">"{personalInfo.name}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">college:</span>{" "}
                    <span className="text-amber-600 dark:text-amber-300">"{personalInfo.college}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">degree:</span>{" "}
                    <span className="text-amber-600 dark:text-amber-300">"B.Tech ECE (2026-2030)"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">interests:</span> [
                    <div className="pl-4 text-cyan-600 dark:text-cyan-300 space-y-0.5">
                      <div>"Artificial Intelligence",</div>
                      <div>"Generative AI",</div>
                      <div>"Modern Web Development",</div>
                      <div>"Digital Productivity"</div>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400">],</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">location:</span>{" "}
                    <span className="text-amber-600 dark:text-amber-300">"Jaipur, India"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">buildingProjects:</span>{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">true</span>
                  </div>
                </div>

                <div>&#125;;</div>

                {/* Live execution indicator */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-sans font-medium">Ready for deployment</span>
                  </div>
                  <span className="font-mono text-[11px] text-indigo-500 dark:text-indigo-400">Vercel Ready</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-3 -right-3 sm:-right-4 px-3.5 py-2 rounded-xl glass-panel shadow-lg border border-indigo-400/30 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  AI & ECE Student
                </span>
              </div>

              <div className="absolute -top-3 -left-3 sm:-left-4 px-3.5 py-2 rounded-xl glass-panel shadow-lg border border-indigo-400/30 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  JECRC University
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
