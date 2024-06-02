"use client";
import TertiaryButton from "@/components/TertiaryButton";
import { Variants, motion } from "framer-motion";
import React from "react";
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
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
export default function Caring() {
  return (
    <motion.section
    variants={container}
      viewport={{ once: true }}
      initial={"hide"}
      whileInView={"visible"}
      className="flex flex-col items-center py-4 px-4 gap-y-6"
    >
      <div className="w-full text-center items-center gap-1 md:gap-3 flex flex-col">
        <motion.p
          variants={items}
          className="text-h4 font-semibold text-D_Gray md:text-h2"
        >
          Caring is the new marketing
        </motion.p>
        <motion.p
          variants={items}
          className="text-b4 text-Gray md:text-b2 md:w-7/12"
        >
          {" "}
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </motion.p>
      </div>
      <ul className="flex flex-col items-center md:flex-row justify-around gap-4 md:gap-8">
        <motion.li
          variants={items}
          className="bg-Silver shadow-md flex flex-col justify-between items-center gap-2 md:gap-4 md:w-[317px] md:h-[176px] w-[230px] h-[130px] p-4"
        >
          <p className="font-semibold text-Gray text-base md:text-h4 text-center">
            Creating Streamlined Safeguarding Processes with OneRen
          </p>
          <TertiaryButton
            text="Readmore"
            icon="right"
            size="md"
            font="medium"
          />
        </motion.li>
        <motion.li
          variants={items}
          className="bg-Silver shadow-md flex flex-col justify-between items-center gap-2 md:gap-4 md:w-[317px] md:h-[176px] w-[230px] h-[130px] p-4"
        >
          <p className="font-semibold text-Gray text-base md:text-h4 text-center">
            What are your safeguarding responsibilities and how can you manage
            them?
          </p>
          <TertiaryButton
            text="Readmore"
            icon="right"
            size="md"
            font="medium"
          />
        </motion.li>
        <motion.li
          variants={items}
          className="bg-Silver shadow-md flex flex-col justify-between items-center gap-2 md:gap-4 md:w-[317px] md:h-[176px] w-[230px] h-[130px] p-4"
        >
          <p className="font-semibold text-Gray text-base md:text-h4 text-center">
            Revamping the Membership Model with Triathlon Australia{" "}
          </p>
          <TertiaryButton
            text="Readmore"
            icon="right"
            size="md"
            font="medium"
          />
        </motion.li>
      </ul>
    </motion.section>
  );
}
