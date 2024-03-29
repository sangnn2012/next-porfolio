"use client"

import React from 'react'
import Image from 'next/image'
import avatar from '@/public/main-avatar.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/contexts/activeSectionContext';

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const data = {
        linkedIn: 'https://www.linkedin.com/in/sang-nguyen-177791100/',
        github: 'https://github.com/sangnn2012',
    }
    return (
        <section ref={ref} id="home" className="mb-28 max-w-[54rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type:"tween", duration: 0.2 }}
                    className="flex flex-col items-center justify-center"
                >
                    <Image
                        src={avatar}
                        alt="Avatar"
                        width={200}
                        height={200}
                        quality={100}
                        priority
                        className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cover"
                    />
                </motion.div>
            </div>
            <motion.p 
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">{`Hello, I'm Sang.`}</span> {`I'm a `}
                <span className="font-bold">front-end developer</span> with{" "}
                <span className="font-bold">6 years</span> of experience. <br/> 
                I enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">ReactJS and VueJS</span>.
            </motion.p>

            <motion.div 
                className="flex flex-col items-center justify-center sm:flex-row gap-3 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link 
                    href="#contact" 
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact")
                        setTimeOfLastClick(Date.now())
                    }}
                >
                        Contact me here 
                        <BsArrowRight className="opacity-70 group-hover:translate-x-1"/>
                </Link>
                <a 
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/SangNguyenResume.pdf" 
                    download
                >
                    Download CV 
                    <HiDownload className="opacity-60 group-hover:translate-y-1"/>
                </a>
                <a 
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href={data.linkedIn}
                    target="_blank"
                >
                    <BsLinkedin/>
                </a>
                <a 
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href={data.github}
                    target="_blank"
                >
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
} 