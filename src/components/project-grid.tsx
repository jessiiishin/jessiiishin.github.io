import { useNavigate } from 'react-router-dom';
import ProjectCard from './project-card';
import { Project } from '../data-utils/projects-inventory';

/*
  Renders a responsive grid of project cards from the inventory.
  Shared by the home page ("featured projects") and the all-projects page,
  so both stay in sync as the card evolves.
*/

/*
  The per-project detail pages (/projects/<slug>) aren't built yet — the routes
  don't exist in App.jsx — so a card opens the project's own link instead.
  Flip this to true once those routes exist and the navigate() branch takes over;
  each project's `to` is already filled in and waiting.
*/
const PROJECT_PAGES_ENABLED = false;

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const primaryLink = project.links?.[0];

        let onClick: (() => void) | undefined;
        if (PROJECT_PAGES_ENABLED && project.to) {
          onClick = () => navigate(project.to!);
        } else if (primaryLink) {
          onClick = () => window.open(primaryLink.url, '_blank', 'noopener,noreferrer');
        }

        return (
          <ProjectCard
            key={project.title}
            title={project.title}
            desc={project.desc}
            tags={project.tech}
            date={project.start.year}
            img={project.img}
            imgAnchor={project.imgAnchor}
            onClick={onClick}
            links={project.links?.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          />
        );
      })}
    </div>
  );
}
