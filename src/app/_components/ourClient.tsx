"use client";
import Carousel from "@/components/slider";
import Image from "next/image";
import React from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
const p: Variants = {
  left: {
    translateX: "-100%",
    opacity: 0,
  },
  right: {
    translateX: "100%",
    opacity: 0,
  },
  initial: {
    translateX: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hide: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};
const logos = [...Array(7)].map((_, index) => (
  <motion.div variants={p} className="relative w-12 h-12">
    {" "}
    <Image src={`/images/Logo-${index}.webp`} fill alt="" />
  </motion.div>
));
export default function OurClient() {
  return (
    <section className="flex w-full flex-col gap-2 items-center py-4">
      <motion.p
        initial="left"
        whileInView="initial"
        viewport={{ once: true }}
        variants={p}
        className="text-D_Gray font-semibold text-h4 md:text-h2"
      >
        Our Clients
      </motion.p>
      <motion.p
        initial="right"
        viewport={{ once: true }}
        whileInView="initial"
        variants={p}
        className="text-Gray text-b4 md:text-b2"
      >
        We have been working with some Fortune 500+ clients
      </motion.p>
      <AnimatePresence>
        {" "}
        <motion.div
          viewport={{ once: true }}
          initial={"hide"}
          whileInView={"visible"}
          transition={{
            delayChildren: 0.3,
            staggerChildren: 0.2,
            duration: 1,
          }}
          className="w-full px-4 md:w-11/12"
        >
          <Carousel items={logos} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
