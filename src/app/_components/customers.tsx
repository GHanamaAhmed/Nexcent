"use client";
import Image from "next/image";
import React from "react";
import { Variants, motion } from "framer-motion";
import Carousel from "@/components/slider";
import TertiaryButton from "@/components/TertiaryButton";
import PrimaryButton from "@/components/primaryButton";
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
const logos = [...Array(7)].map((_, index) => (
  <motion.div key={index} className="relative w-12 h-12">
    {" "}
    <Image src={`/images/Logo-${index}.webp`} fill alt="" />
  </motion.div>
));
export default function Customers() {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={"hide"}
      whileInView={"visible"}
      variants={container}
      className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center md:gap-7 px-4 py-4"
    >
      <div>
        <motion.div
          variants={items}
          className="relative w-[248px] h-[248px] md:w-[326px] md:h-[326px]"
        >
          <Image src={"/images/image 9.webp"} fill alt="" />
        </motion.div>
      </div>
      <div className="max-w-full">
        <motion.p className="text-Gray text-b4 md:text-b2 font-medium mb-4">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </motion.p>
        <motion.p className="text-Primary text-h4 font-semibold mb-2">
          Tim Smith
        </motion.p>
        <motion.p className="text-L_Gray text-b4 md:font-b2 mb-4">
          British Dragon Boat Racing Association
        </motion.p>
        <div className="flex-col gap-4 md:gap-8 md:flex-row">
          <motion.div>
            <TertiaryButton
              text="Meet all customers"
              icon="right"
              font="medium"
              size="md"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
