"use client"

import React from 'react';
import SectionHeading from './sectionHeading';
import { projectsData } from '@/lib/data';
import Project from './project';

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-36">
            <SectionHeading>My Project</SectionHeading>
            <div> 
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}


