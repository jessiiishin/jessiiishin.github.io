import React from 'react';

type ProjectTagProps = {
    text?: string;
    type?: 'tech' | 'ptype';
}

export default function ProjectTag({ text = "yay", type = 'tech' }: ProjectTagProps) {
    const styles =
        type === 'ptype'
            ? 'bg-accent/10 text-accent'
            : 'bg-primary/10 text-primary';

    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 font-sans text-[0.625rem] font-medium ${styles}`}
        >
            {text}
        </span>
    );
}
