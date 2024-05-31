"use client";
import PrimaryButton from "@/components/primaryButton";
import SecondaryButton from "@/components/secondaryButton";
import Image from "next/image";
import React from "react";
import { motion, Variants, MotionConfig } from "framer-motion";
const varaints: Variants = {
  left: {
    translateX: "-100%",
    opacity: 0,
  },
  right: {
    translateX: "100%",
    opacity: 0,
  },
  up: {
    translateY: "-100%",
    opacity: 0,
  },
  initial: {
    translateX: 0,
    translateY: 0,
    opacity: 1,
  },
};
export default function Header() {
  return (
    <header

      className="w-full flex justify-around items-center py-2 bg-Silver"
    >
      <MotionConfig
        transition={{
          
          duration: 1,
        }}
      >
        <motion.span
          variants={varaints}
          viewport={{ once: true }}
          initial="left"
          whileInView="initial"
          className="flex gap-1"
        >
          <Image src={"/images/Icon.webp"} height={25} width={25} alt="icon" />
          <h5 className="font-semibold ">Nexcent</h5>
        </motion.span>
        <motion.ul
          variants={varaints}
          viewport={{ once: true }}
          initial="up"
          whileInView="initial"
          className="gap-3 font-normal text-sm hidden md:flex"
        >
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </motion.ul>
        <motion.div
          variants={varaints}
          initial="right"
          viewport={{ once: true }}
          whileInView="initial"
          className="flex gap-1"
        >
          <SecondaryButton font="medium" text="Sign in" />
          <PrimaryButton font="medium" text="Sign up" />
        </motion.div>
      </MotionConfig>
    </header>
  );
}
