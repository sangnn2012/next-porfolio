"use client"

import React from 'react';
import SectionHeading from './sectionHeading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
    const { ref } = useSectionInView('Projects');
  
    return (
        <section ref={ref} id="projects" className="scroll-mt-36 mb-28">
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


