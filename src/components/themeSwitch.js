"use client"
import React from "react"
import { BsSun, BsMoon } from 'react-icons/bs'
import {useTheme} from '@/contexts/themeContext';

export default function ThemeSwitch () {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="fixed bottom-5 right-5 bg-gray-400 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
        onClick={toggleTheme}
        >
            {
                theme === "light" ? (
                    <BsSun />
                ) : (
                    <BsMoon />
                )
            }
        </button>
    )
}