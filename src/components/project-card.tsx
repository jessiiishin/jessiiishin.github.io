import React from 'react';
import './project-card.css';
import ProjectTag from './project-tag';

export type ProjectCardProps = {
  title: string;
  desc: string;
  tags: string[];
  date: number;
  img?: string;
  links?: React.ReactNode;
  onClick?: () => void;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="project-card-wrapper">
            <img src={props.img} alt={props.title} />
            <h3 >{props.title}</h3>
            <p>{props.desc}</p>
            <div className="project-card-tags">
                {props.tags.map((tag) => (
                    <ProjectTag text={tag}/>
                ))}
            </div>
            <div className="project-card-links">
                {props.links}
            </div>
        </div>
    );
}