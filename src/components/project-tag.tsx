import React from 'react';

/*
  Mirrors the "Tag" / "Tag-S" component in the Figma Components Hub.
  Tag-S is the mobile/tablet size, Tag the desktop one, so the two are
  folded into a single responsive component that grows at lg.
*/

type TagState = 'default' | 'tech' | 'gray';

type ProjectTagProps = {
    text?: string;
    state?: TagState;
}

const stateStyles: Record<TagState, string> = {
    default: 'bg-accent/15',
    tech: 'bg-tag-tech',
    gray: 'bg-tag-gray/39',
};

export default function ProjectTag({ text = "yay", state = 'default' }: ProjectTagProps) {
    return (
        <span
            className={`inline-flex h-3 items-center justify-center px-1 py-px font-sans text-[0.5rem] font-bold whitespace-nowrap text-primary lg:h-4 lg:text-[0.5625rem] ${stateStyles[state]}`}
        >
            {text}
        </span>
    );
}
