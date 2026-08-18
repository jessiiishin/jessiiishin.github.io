import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';
import Section from '../components/section';
import ProjectCard, { ProjectCardProps } from '../components/project-card';
import EntryCard, { EntryCardProps } from '../components/entry-card';
import ContactList, { Contact } from '../components/contact-list';
import Footer from '../components/footer';

/*
  Home page contents
*/

const featuredProjects: ProjectCardProps[] = [
  {
    title: 'CarbonChain',
    desc: 'Offset your carbon footprint, know where your money is going.',
    tags: ['TypeScript', 'React', 'Solidity'],
    date: 2025,
  },
  {
    title: 'ChewCheck',
    desc: 'Mobile application that identifies plants using the device camera and quickly determines whether they are safe for your pets.',
    tags: ['TypeScript', 'React Native', 'Expo', 'Firebase'],
    date: 2025,
  },
  {
    title: 'Munchy Munchy',
    desc: 'Generate food tiers (best, decent) in cities of your choice, personalized by budget, time, and food preferences.',
    tags: ['TypeScript', 'React', 'HTML', 'Firebase'],
    date: 2025,
  },
];

const education: EntryCardProps[] = [
  {
    org: 'Brown University',
    role: 'S.c.B. Computer Science, A.B. Visual Art',
    date: 'Sep 2024 - Present',
    points: [
      'Cumulative GPA (estimated): 4.00',
      'Relevant Coursework:',
      'Side hustles:',
    ],
  },
];

const experience: EntryCardProps[] = [
  {
    org: 'Brown RISD Game Developers',
    role: 'Executive Board Member, Producer, Game Developer',
    date: 'Sep 2024 - Present',
    desc: 'Lead cross-functional collaborative development and design of small-scale video games each semester from scratch using game engines like Godot, publishing 7-8 games each year as a club. Oversee weekly sprint meetings and organize events, manage development timelines. Streamline workflow and communication between interdisciplinary teams of artists, programmers, and sound.',
  },
  {
    org: 'Full Stack at Brown',
    role: 'Full Stack Web Developer',
    date: 'Sep 2025 - Present',
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>

        {/* Stacked on mobile/tablet (experience first, per the design);
            two columns side by side on desktop (education left). */}
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:gap-16">
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
        </div>

        <Section title="would love to talk!">
          <ContactList contacts={contacts} />
        </Section>
      </div>

      <Footer />
    </div>
  );
}
