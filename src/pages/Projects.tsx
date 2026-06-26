import React from 'react';

import { useState } from 'react'
import MenuBar from './MenuBar';
import ProjectCard, { ProjectCardProps } from '../components/project-card';

export default function Projects() {
    return (
    <div>
      <header>
        <MenuBar/>
      </header>

      <section>
        <h1> PROJECTS </h1>
      </section>
    </div>
  );
}