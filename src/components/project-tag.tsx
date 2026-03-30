import React from 'react';
import './project-tag.css';

type ProjectTagProps = {
    text?: string;
    type?: 'tech' | 'ptype';
}

export default function ProjectTag({text = "yay", type = 'tech'}: ProjectTagProps) {
    return (
        <span>{text}</span>
    );
}