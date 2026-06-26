import { useState } from 'react'
import MenuBar from './MenuBar';
import ProjectCard, { ProjectCardProps } from '../components/project-card';

const defaultProject: ProjectCardProps = {
  title: "Amazing Project",
  desc: "Great job on project description",
  tags: ["yay", "to", "this", "project"],
  date: 2026,
}

export default function Home() {
    return (
    <div className="flex flex-col px-32 py-16">
      <header>
        <MenuBar/>
      </header>

      <section className="hero">
        <h1>JESSI <br/> SHIN</h1>
        <p>
          {`Hi, I'm a`} <strong>software engineer</strong>
          {`who loves creating software that `}
          <span className="text-accent">feels good</span>
          {`and `}
          <span className="text-accent">works like magic.</span>
        </p>
      </section>

      <section>
        <div className="flex flex-row items-center justify-between">
          <h2>featured projects</h2>
          <a href="/projects">view all</a>
        </div>
        <div className="mt-4 mb-8 flex flex-row gap-6">
          <ProjectCard {...defaultProject} />
          <ProjectCard {...defaultProject} />
          <ProjectCard {...defaultProject} />
        </div>
      </section>

      <section className="flex flex-row gap-16">
        <section>
          <div className="flex flex-row items-center justify-between">
            <h2>education</h2>
          </div>
          <div>
            brown university
          </div>
        </section>

        <section>
          <div className="flex flex-row items-center justify-between">
            <h2>experience</h2>
          </div>
          <div>
            brgd, fsab
          </div>
        </section>
      </section>

      <footer>
        have you ever had a dream... you uhh.. once uhh
      </footer>
    </div>
  );
}