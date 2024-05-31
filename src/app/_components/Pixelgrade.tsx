"use client";
import PrimaryButton from "@/components/primaryButton";
import Image from "next/image";
import React from "react";
import { Variants, motion } from "framer-motion";
const items: Variants = {
  hide: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};
export default function Pixelgrade() {
  return (
    <motion.section
      initial="hide"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      transition={{
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 1,
      }}
      className="py-3 grid grid-cols-1 justify-items-center md:grid-cols-2 gap-8 px-4"
    >
      <motion.div
      
        variants={items}
        className="relative w-[247px] h-[188px] md:w-[441px] md:h-[329px] md:justify-self-end"
      >
        <Image fill src="/images/rafiki.webp" alt="rafiki" />
      </motion.div>
      <motion.div
        className="w-fit md:justify-self-start"
        initial="hide"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2,
          duration: 1,
        }}
        variants={items}
      >
        <motion.p
          variants={items}
          className="text-D_Gray text-h4 md:text-h2 pb-4"
        >
          The unseen of spending three years at Pixelgrade
        </motion.p>
        <motion.p
          variants={items}
          className="text-Gray text-b4 md:text-b3 pb-8"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </motion.p>
        <PrimaryButton text="Learn More" size="sm" font="medium" />
      </motion.div>
    </motion.section>
  );
}
