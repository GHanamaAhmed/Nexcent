"use client";
import PrimaryButton from "@/components/primaryButton";
import React from "react";
import { Variants, motion } from "framer-motion";
const container: Variants = {
  hide: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      staggerChildren: 0.7,
      delayChildren: 0.5,
      duration: 1,
    },
  },
};
const items: Variants = {
  hide: {
    scale: 0,
  },
  visible: {
    scale: 1,
    
  },
};
export default function Demo() {
  return (
    <motion.section
      viewport={{ once: true }}
      variants={container}
      initial="hide"
      whileInView="visible"
      className="bg-Silver flex flex-col items-center gap-4 md:gap-8 py-4 md:py-8"
    >
      <motion.p
        variants={items}
        className="text-Black font-semibold text-h3 md:text-h1 md:w-7/12 text-center"
      >
        Pellentesque suscipit fringilla libero eu.
      </motion.p>
      <motion.span variants={items}>
        <PrimaryButton text="Get a Demo" icon="right" />
      </motion.span>
    </motion.section>
  );
}
