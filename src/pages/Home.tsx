import { useState } from 'react'
import MenuBar from './MenuBar';
import ProjectCard, { ProjectCardProps } from '../components/project-card';
import './home.css'

const defaultProject: ProjectCardProps = {
  title: "Amazing Project",
  desc: "Great job on project description",
  tags: ["yay", "to", "this", "project"],
  date: 2026,
}

export default function Home() {
    return (
    <div className="home-container">
      <header>
        <MenuBar/>
      </header>

      <section className="hero">
        <h1>JESSI <br/> SHIN</h1>
        <p>
          {`Hi, I'm a`} <strong>software engineer</strong> 
          {`who loves creating software that `}
          <span className="hero-accent">feels good</span> 
          {`and `}
          <span className="hero-accent">works like magic.</span>
        </p>
      </section>
      
      <section>
        <div className="section-header">
          <h2>featured projects</h2>
          <a href="/projects" className="view-all-projects-link">view all</a>
        </div>
        <div className="project-cards-list">
          <ProjectCard {...defaultProject} />
          <ProjectCard {...defaultProject} />
          <ProjectCard {...defaultProject} />
        </div>
      </section>

      <section className="education-experience">
        <section>
          <div className="section-header">
            <h2>education</h2> 
          </div>
          <div className="edu-exp-list">
            brown university
          </div>
        </section>

        <section>
          <div className="section-header">
            <h2>experience</h2>
          </div>
          <div className="edu-exp-list">
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