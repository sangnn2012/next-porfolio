"use client"

import React from 'react'
import Image from 'next/image'
import avatar from '@/public/avatar.jpeg';
import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <section>
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
            <p className="mb-10 mt-4 px-4 text-2xl font-bold leading-[1.5] flex items-center justify-center">
                <span>Hello, I'm Sang. </span>{""}
                <span>I'm a front-end developer with 6 years of experience.</span>
                <span> My interest is all about front-end development</span>
            </p>
        </section>
    )
} 