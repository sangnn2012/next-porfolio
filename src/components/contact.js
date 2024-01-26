"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
        id="contact"
        ref={ref}
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
            once: true,
        }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
            Please contact me directly at{" "} 
            <a className="underline" href="mailto:sangnn2012@gmail.com">
            sangnn2012@gmail.com
            </a>{" "}
            or through this form.
        </p>

        <form 
            className="mt-10 flex flex-col"
            action={sendEmail()}
        >
            <input 
                type="email" 
                name="senderEmail"
                className="text-black h-14 rounded-lg borderBlack px-4"
                placeholder="Your email"
                required
                maxLength="50"
            />
            <textarea 
                className="text-black p-4 h-52 my-3 rounded-lg borderBlack" 
                name="senderText"
                placeholder="Your message"
                required
                maxLength="50"
            />
            <button 
                type="submit" 
                className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-100 text-black rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-400 active:scale-105"
            >
                Submit {""}
                <FaPaperPlane className="opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1"/>
            </button>
        </form>

    </motion.section>
  );
}
