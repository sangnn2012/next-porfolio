"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    const { ref } = useSectionInView("Experience");

    return (
        <section
            id="experience"
            ref={ref}
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{ 
                                    background: 'black',
                                    boxShadow: "none",
                                    border: "1px solid #e2e8f0",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem", 
                                }}
                                contentArrowStyle={{ 
                                    borderRight: '0.4rem solid  white' 
                                }}
                                icon={item.icon}
                                iconStyle={{
                                    background: "black",
                                    fontSize: "1.5rem",
                                }}
                            >
                                <h3 className="font-bold capitalize">{item.title}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className="font-normal !mt-1">{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    );
};
