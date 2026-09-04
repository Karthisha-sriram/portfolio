import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Section Tag (no code prefixes like //) */}
        <div className="mb-3">
          <span className="text-xs font-mono tracking-widest text-[#5b7fff] uppercase font-semibold">
            Featured Projects
          </span>
        </div>

        {/* Heading & Subtext */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 font-display">
          Featured Projects
        </h2>
        <p className="text-base sm:text-lg text-[#a8b0c8] max-w-2xl mb-14 text-justify">
          Full-stack software engineering and intelligent applications built and validated in code.
        </p>

        {/* PLAIN STATIC CSS GRID — NO auto-scroll, NO carousel, NO auto-advancing animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="glass-panel rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Header with Project Badge & Title */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider text-[#5b7fff] bg-[#5b7fff]/10 border border-[#5b7fff]/25">
                    {project.badgeCode}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display leading-snug">
                  {project.title}
                </h3>

                {/* Justified Description */}
                <p className="text-sm sm:text-base text-[#a8b0c8] leading-relaxed mb-6 text-justify">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-[#eef1f8] bg-white/[0.03] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-5 border-t border-white/[0.08]">
                {/* BOLD, THICK, solid blue button for Live Demo */}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-live-demo inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-200"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                  </a>
                )}

                {/* Default outline style button for GitHub Repository */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-repo inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                >
                  <Github className="w-4 h-4 text-[#a8b0c8]" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
