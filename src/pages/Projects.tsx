import MenuBar from './MenuBar';
import ProjectGrid from '../components/project-grid';
import Section from '../components/section';
import { allProjects } from '../data-utils/projects-inventory';

export default function Projects() {
  return (
    <div className="flex flex-col gap-12 px-8 py-8 lg:gap-16 lg:px-32 lg:py-16">
      <header>
        <MenuBar/>
      </header>

      <Section title="all projects">
        <ProjectGrid projects={allProjects} />
      </Section>
    </div>
  );
}
