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
const container: Variants = {
  hide: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.7,
    },
  },
};
export default function Design() {
  return (
    <motion.section
      initial="hide"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={container}
      className=" grid grid-cols-1 md:grid-cols-2 md:items-center	 justify-items-center px-4 py-4 gap-y-12"
    >
      <motion.div
        variants={items}
        className="relative w-[248px] h-[247px] md:w-[441px] md:h-[433px]"
      >
        <Image src={"/images/pana.webp"} fill alt="pana" />
      </motion.div>
      <div>
        <motion.p
          variants={items}
          className="text-D_Gray text-h4 md:text-h2 font-semibold mb-4"
        >
          How to design your site footer like we did
        </motion.p>
        <motion.p
          variants={items}
          className="text-Gray text-b4 md:text-b3 mb-8"
        >
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </motion.p>
        <motion.div variants={items}>
          <PrimaryButton text="Learn More" font="medium" size="sm" />
        </motion.div>
      </div>
    </motion.section>
  );
}
