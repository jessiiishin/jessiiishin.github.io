import React from 'react';
import MenuBar from '../components/MenuBar';
import ProjectCard from '../components/ProjectCard';
import ExperienceItem from '../components/ExperienceItem';
import Footer from '../components/Footer';
import './Home.css';

// Asset URLs from Figma (valid for 7 days)
const imgChewCheck = "https://www.figma.com/api/mcp/asset/604f8a5d-9c99-44c3-85f2-e4f777f45fb4";
const imgRectangle15 = "https://www.figma.com/api/mcp/asset/e27df40d-22fa-4afe-a3de-85110fb28424";
const imgRectangle16 = "https://www.figma.com/api/mcp/asset/2baea365-7c5c-4c5d-bcdd-050bd264abbe";
const imgRectangle17 = "https://www.figma.com/api/mcp/asset/da73abf5-a2c1-457a-9b3f-50c7ec4b61b1";
const imgOrgLogo = "https://www.figma.com/api/mcp/asset/4d823037-e932-46ab-89ed-a8e5d18cf368";
const imgGithubIcon = "https://www.figma.com/api/mcp/asset/5685d624-5a31-4f27-b50f-da346a835f5a";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/d843ee0d-0af4-46cc-9583-253c8ecdb7fd";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'CarbonChain',
    description: "Winner of Bloomberg's PennApps 2025 Best Sustainability Award. Blockchain platform that directly connects those funding climate projects with the projects themselves, ensuring transparency and preventing double-counting.",
    tags: ['Game Dev', 'Godot', 'GDScript'],
    githubUrl: '#',
    image: imgRectangle17,
  },
  {
    title: 'ChewCheck',
    description: "Mobile application that identifies plants using a device camera to quickly determine whether they are safe for the user's pets.",
    tags: ['TypeScript', 'React Native', 'Expo', 'HTML', 'Firebase'],
    githubUrl: '#',
    image: imgRectangle15,
  },
  {
    title: 'Munchy Munchy',
    description: 'Generate food tours (food crawls) in cities of your choice, personalized by budget, time, and food preferences.',
    tags: ['TypeScript', 'React Native', 'Expo', 'HTML', 'Firebase'],
    githubUrl: '#',
    image: imgRectangle16,
  },
];

const experienceItems = [
  {
    orgName: 'Brown RISD Game Developers',
    role: 'Executive Board Member, Producer, Game Developer',
    dateRange: 'Sep 2024 – Present',
    logo: imgOrgLogo,
    bullets: [
      'Lead cross-functional collaborative development and design of small-scale video games each semester from scratch using game engines like Godot, publishing 7-8 games each year as a club',
      'Oversee weekly sprint meetings and organize events, manage development timelines',
      'Streamline workflow and communication between interdisciplinary teams of artists, programmers, and sound by establishing organizational tools for asset requests and design documents',
      'Implement core gameplay mechanics and logic in Godot, integrate assets and UI/UX design',
    ],
  },
  {
    orgName: 'Full Stack At Brown',
    role: 'Full Stack Web Developer',
    dateRange: 'Sep 2025 – Present',
    logo: imgOrgLogo,
    bullets: [
      'Implement a full-stack website every semester, contributing to an end-to-end development workflow, editing feature implementation based on stakeholder feedback with high attention to detail',
      'Collaborating with a cross-functional team to design and develop full-stack websites for organizations at Brown University using React, TypeScript, and HTML/CSS',
      'Building responsive, maintainable UI components and implementing clean, modular code aligned with modern web development practices',
    ],
  },
];

const educationItems = [
  {
    orgName: 'Brown University',
    role: 'S.c.B. Computer Science, A.B. Visual Art',
    dateRange: 'Sep 2024 – Present',
    logo: imgOrgLogo,
    bullets: [
      'Cumulative GPA (estimated): 4.00',
      'Relevant Coursework:',
      'Side hustles:',
    ],
  },
];

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <MenuBar />

      {/* Hero */}
      <section className="hero">
        <h1 className="hero-name">
          JESSI<br />SHIN
        </h1>
        <p className="hero-intro">
          {`Hi, I'm a `}
          <strong>software engineer</strong>
          {`\nwho loves creating software that `}
          <span className="accent">feels good</span>
          {` and `}
          <span className="accent">works like magic.</span>
        </p>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="section-header">
          <h2 className="section-title">featured projects</h2>
          <a href="/projects" className="view-all-link">
            view all projects
            <img src={imgArrowRight} alt="" className="arrow-icon" />
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              image={project.image}
              githubIcon={imgGithubIcon}
            />
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <section className="exp-edu-section">
        <div className="experience-col">
          <h2 className="section-title">experience</h2>
          <div className="exp-list">
            {experienceItems.map((item) => (
              <ExperienceItem key={item.orgName} {...item} />
            ))}
          </div>
        </div>
        <div className="education-col">
          <h2 className="section-title">education</h2>
          <div className="exp-list">
            {educationItems.map((item) => (
              <ExperienceItem key={item.orgName} {...item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
