import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Code2, 
  Eye,
  Bot,
  CalendarCheck2,
  CheckCircle2
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  // Visual header badge icons
  const getProjectIcon = (id) => {
    switch (id) {
      case 'portfolio':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'ai-website':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'student-productivity':
        return <CalendarCheck2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Highlighted <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A showcase of practical web applications, AI integrations, and student productivity solutions.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl flex flex-col justify-between border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/40 group overflow-hidden transition-all duration-300"
              >
                <div>
                  {/* Card Visual Header Banner */}
                  <div className="h-44 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 flex flex-col justify-between relative overflow-hidden">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    
                    {/* Gradient Glow */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Top Row: Category Pill & Project Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-cyan-300 backdrop-blur-md border border-white/10">
                        {project.category}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                        {getProjectIcon(project.id)}
                      </div>
                    </div>

                    {/* Banner Title */}
                    <div className="relative z-10">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300">
                        Project 0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Technologies Used */}
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-mono">
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Action Buttons */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/60 mt-2">
                  {/* View Project Button */}
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-200 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Project</span>
                  </button>

                  {/* Source Code Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 glass-card hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-400/50 transition-colors"
                    title="View GitHub repository"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Project Modal Preview */}
        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={handleCloseModal}
        />

        {/* Callout: Collaborations & GitHub */}
        <div className="mt-16 text-center">
          <div className="glass-panel max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Have an exciting project idea or hackathon?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                I am actively seeking practical project collaborations and student developer opportunities.
              </p>
            </div>
            <a
              href="https://github.com/gunjanny"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
