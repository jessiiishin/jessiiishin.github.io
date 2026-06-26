import React from 'react';
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
        <div
            onClick={props.onClick}
            className="flex flex-1 cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-[0_0.125rem_0.25rem_0.0625rem_rgba(41,41,120,0.39)] transition-[box-shadow,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_0.3125rem_0.3125rem_0.0625rem_rgba(41,41,120,0.39)]"
        >
            <img
                src={props.img}
                alt={props.title}
                className="block aspect-[370/205] w-full shrink-0 bg-[rgba(41,41,120,0.08)] object-cover"
            />
            <h3 className="mt-6 px-6 font-sans text-sm font-bold text-primary">{props.title}</h3>
            <p className="mt-2 px-6 font-sans text-[0.6875rem] leading-[1.45] text-primary">{props.desc}</p>
            <div className="mt-5 flex flex-wrap gap-1.5 px-6">
                {props.tags.map((tag) => (
                    <ProjectTag key={tag} text={tag}/>
                ))}
            </div>
            <div className="mt-3 flex items-center gap-2 px-6 pb-6 [&_a]:text-[0.625rem] [&_a]:text-accent [&_a]:underline">
                {props.links}
            </div>
        </div>
    );
}