import { useNavigate } from 'react-router-dom';
import ProjectCard from './project-card';
import { Project } from '../data-utils/projects-inventory';

/*
  Renders a responsive grid of project cards from the inventory.
  Shared by the home page ("featured projects") and the all-projects page,
  so both stay in sync as the card evolves.
*/

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          desc={project.desc}
          tags={project.tech}
          date={project.start.year}
          img={project.img}
          onClick={project.to ? () => navigate(project.to!) : undefined}
          links={project.links?.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        />
      ))}
    </div>
  );
}
