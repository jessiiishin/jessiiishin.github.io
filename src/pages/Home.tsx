import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';
import Section from '../components/section';
import ProjectGrid from '../components/project-grid';
import EntryCard, { EntryCardProps } from '../components/entry-card';
import ContactList, { Contact } from '../components/contact-list';
import Footer from '../components/footer';
import { featuredProjects } from '../data-utils/projects-inventory';
import brownLogo from '../assets/logos/brown-logo.png';
import brgdLogo from '../assets/logos/brgd-logo.jpg';
import fsabLogo from '../assets/logos/fsab-logo.jpg';
import acelabLogo from '../assets/logos/acelab-logo.jpg';

/*
  Home page contents
*/

const education: EntryCardProps[] = [
  {
    org: 'Brown University',
    role: 'S.c.B. Computer Science, A.B. Visual Art',
    date: 'Sep 2024 - Present',
    icon: brownLogo,
    points: [
      'Cumulative GPA (estimated): 4.00',
      'Relevant Coursework:',
      'Side hustles:',
    ],
  },
];

const experience: EntryCardProps[] = [
  {
    org: 'Acelab',
    role: 'AI/Engineering Intern',
    date: 'Jun 2026 - Aug 2026',
    icon: acelabLogo,
    desc: 'Built core features for Smart Docs, a Figma-style browser-based document editor that extended Fabric.js with custom canvas elements, rich-text editing, formatting toolbars, and document management workflows using Vue. Developed the synchronization layer and database migrations connecting a Cloudflare Durable Object with PostgreSQL, enabling document persistence, version history, and concurrent collaboration. Audited the design system by cataloging components across the codebase and Figma, identifying inconsistencies and standardizing implementation between design and engineering. Implemented full-stack bug fixes shipped in weekly production releases, iterating on product features from customer feedback while collaborating in bi-weekly Agile sprints.'
  },
  {
    org: 'Brown RISD Game Developers',
    role: 'Executive Board Member, Producer, Game Developer',
    date: 'Sep 2024 - Present',
    icon: brgdLogo,
    desc: 'Lead cross-functional collaborative development and design of small-scale video games each semester from scratch using game engines like Godot, publishing 7-8 games each year as a club. Oversee weekly sprint meetings and organize events, manage development timelines. Streamline workflow and communication between interdisciplinary teams of artists, programmers, and sound.',
  },
  {
    org: 'Full Stack at Brown',
    role: 'Full Stack Web Developer',
    date: 'Sep 2025 - Present',
    icon: fsabLogo,
    desc: 'Implement a full-stack website every semester, contributing to an end-to-end development workflow. Collaborate with a cross-functional team to design and develop full-stack websites for organizations at Brown University using React, TypeScript, and HTML/CSS. Build responsive, maintainable UI components and clean, modular code.',
  },
];

const contacts: Contact[] = [
  { label: 'jay_shin@brown.edu', href: 'mailto:jay_shin@brown.edu' },
  { label: 'jessiiishin on linkedin', href: 'https://www.linkedin.com/in/jessiiishin' },
  { label: 'github', href: 'https://github.com/jessiiishin' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-12 px-8 py-8 lg:gap-16 lg:px-32 lg:py-16">
        <header>
          <MenuBar />
        </header>

        <section className="flex flex-col gap-6 lg:flex-row lg:gap-16">
          <h1>
            JESSI <br /> SHIN
          </h1>
          <h3 className="max-w-[24rem] lg:py-4">
            Hi, I'm a <strong>software engineer</strong> who loves creating software that{' '}
            <span className="text-accent">feels good</span> and{' '}
            <span className="text-accent">works like magic.</span>
          </h3>
        </section>

        <Section
          title="featured projects"
          action={<Link to="/projects">view all projects →</Link>}
        >
          <ProjectGrid projects={featuredProjects} />
        </Section>

        <Section title="education" className="flex-1">
          <div className="flex flex-col gap-8">
            {education.map((entry) => (
              <EntryCard key={entry.org} {...entry} />
            ))}
          </div>
        </Section>

        <Section title="experience" className="flex-1">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
            {experience.map((entry) => (
              <EntryCard key={entry.org} {...entry} />
            ))}
          </div>
        </Section>

        <Section title="contacts">
          <ContactList contacts={contacts} />
        </Section>
      </div>

      <Footer />
    </div>
  );
}
