"use client";
import PrimaryButton from "@/components/primaryButton";
import Image from "next/image";
import { motion, Variants, MotionConfig } from "framer-motion";
const variants: Variants = {
  down: {
    opacity: 0,
    translateY: "100%",
  },
  left: {
    translateX: "-100%",
    opacity: 0,
  },
  initial: {
    translateY: 0,
    translateX: 0,
    opacity: 1,
  },
};
export default function HeroSection() {
  return (
    <motion.section
      viewport={{
        once: true,
        amount: 0.8,
      }}
      className="bg-Silver flex flex-col md:flex-row-reverse items-center md:justify-around px-7 pt-4 pb-3"
    >
      <motion.span
        viewport={{ once: true }}
        variants={variants}
        initial={"down"}
        whileInView={"initial"}
        transition={{
          type: "spring",
          duration: 1.5,
        }}
        className="relative w-[268px] md:w-[391px] h-[204px] md:h-[407px]"
      >
        <Image src={"/images/Illustration.webp"} fill alt="Illustration" />
      </motion.span>
      <div className="flex flex-col ">
        <motion.h2
          viewport={{ once: true }}
          variants={variants}
          initial={"left"}
          whileInView={"initial"}
          transition={{
            type: "spring",
            delay: 0,
          }}
          className="text-D_Gray text-h2 md:text-h1 font-semibold"
        >
          Lessons and insights
        </motion.h2>
        <motion.h2
          viewport={{ once: true }}
          variants={variants}
          initial={"left"}
          whileInView={"initial"}
          transition={{
            type: "spring",
            delay: 0.3,
          }}
          className="text-h2 md:text-h1 font-semibold text-Primary"
        >
          from 8 years
        </motion.h2>
        <motion.h2
          viewport={{ once: true }}
          variants={variants}
          initial={"left"}
          whileInView={"initial"}
          transition={{
            type: "spring",
            delay: 0.6,
          }}
          className="text-Gray my-3 text-b3 md:text-b2"
        >
          Where to grow your business as a photographer: site or social media?
        </motion.h2>
        <motion.div
          viewport={{ once: true }}
          variants={variants}
          initial={"left"}
          whileInView={"initial"}
          transition={{
            type: "spring",
            delay: 1,
          }}
        >
          <PrimaryButton text="Register" font="normal" />
        </motion.div>
      </div>
    </motion.section>
  );
}
