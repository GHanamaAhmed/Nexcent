"use client";
import PrimaryButton from "@/components/primaryButton";
import Image from "next/image";
import { motion, Variants, MotionConfig } from "framer-motion";
export default function Home() {
  const variants: Variants = {
    down: {
      opacity: 0,
      y: "100%",
    },
    left: {
      x: "-100%",
      opacity: 0,
    },
    initial: {
      y: 0,
      x: 0,
      opacity: 1,
    },
  };
  return (
    <main className="">
      <motion.section
        viewport={{
          once: true,
          amount: 0.8,
        }}
        className="bg-Silver flex flex-col md:flex-row-reverse items-center md:justify-center px-7 pt-4 pb-3"
      >
        <motion.span
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
            variants={variants}
            initial={"left"}
            whileInView={"initial"}
            transition={{
              type: "spring",
              delay: 0,
            }}
            className="text-D_Gray text-3xl font-semibold"
          >
            Lessons and insights
          </motion.h2>
          <motion.h2
            variants={variants}
            initial={"left"}
            whileInView={"initial"}
            transition={{
              type: "spring",
              delay: 0.3,
            }}
            className="text-3xl font-semibold text-Primary"
          >
            from 8 years
          </motion.h2>
          <motion.h2
            variants={variants}
            initial={"left"}
            whileInView={"initial"}
            transition={{
              type: "spring",
              delay: 0.6,
            }}
            className="text-Gray my-3 text-sm"
          >
            Where to grow your business as a photographer: site or social media?
          </motion.h2>
          <motion.div
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
    </main>
  );
}
