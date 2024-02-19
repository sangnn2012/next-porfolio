"use client"

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './sectionHeading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 0.5);

  return (
    <motion.section 
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-36"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        As a Senior Front-end Engineer with over 6 years of extensive experience in web application development, 
        focusing predominantly on frontend technologies, I have excelled in creating dynamic, responsive, 
        and intuitive user interfaces across various business domains such as Web3, healthcare, 
        hotel management, and law process management. <br />
        My technical arsenal is fortified with a deep understanding of frontend frameworks 
        like <span className="font-medium">Vue 2, Vue 3</span>, and <span className="font-medium">React/React hooks</span>, 
        complemented by state management libraries including <span className="font-medium">Redux, Recoil, VueX</span>, 
        and <span className="font-medium">Pinia</span>. I am proficient in <span className="font-medium">JavaScript and ES6+</span>, 
        <span className="font-medium">TypeScript</span>, <span className="font-medium">HTML5</span>, 
        and <span className="font-medium">CSS3</span>, alongside modern bundling tools and micro-frontend architecture. <br />
        My commitment to best coding practices and a pragmatic development style, along with excellent problem-solving skills 
        and a knack for continuous learning, drive my contributions to innovative projects. Fluent in English with an IELTS score of 7.0, 
        I effectively collaborate with global and multicultural teams, applying Agile and Scrum methodologies to ensure project success. <br />
      </p>

      <p>
        <span className="italic">When I'm not working</span>I engage in regular
        <span className="font-medium">workouts</span> and cherish <span className="font-medium">travelling </span> 
        to discover diverse cultures and sceneries. Professionally, I'm expanding my expertise into 
        <span className="font-medium"> backend development with Node.js</span> and the intriguing realm of 
        <span className="font-medium"> Machine Learning</span>. Moreover, I've begun participating in 
        <span className="font-medium"> Kaggle challenges</span>, sharpening my data science skills in a competitive setting.
      </p>

    </motion.section>
  )
}
