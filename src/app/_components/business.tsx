"use client";
import { Variants, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useCallback } from "react";
import CounteAnimation from "../hooks/counteAnimation";
const statistiques = [
  {
    pathIcon: `/images/Icon (4).webp`,
    name: "Members",
    value: 2245341,
  },
  {
    pathIcon: `/images/Icon (5).webp`,
    name: "Clubs",
    value: 46328,
  },
  {
    pathIcon: `/images/Icon (6).webp`,
    name: "Event Bookings",
    value: 828867,
  },
  {
    pathIcon: `/images/Icon (7).webp`,
    name: "Payments",
    value: 1926436,
  },
];
const items: Variants = {
  hide: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};
export default function Business() {
  const [inView, setInView] = React.useState(false);
  const CardAnimationCallback = useCallback(
    (e: any) => (
      <CounteAnimation initialValue={0} targetValue={e.value} duration={4000} />
    ),
    []
  );
  return (
    <motion.section
      viewport={{
        once: true,
      }}
      transition={{
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }}
      initial="hide"
      whileInView={"visible"}
      className="bg-Silver gap-y-4 grid grid-cols-1 md:grid-cols-2 place-items-center py-10 md:py-16 px-4"
    >
      <motion.div
        viewport={{
          once: true,
        }}
        initial="hide"
        whileInView={"visible"}
        variants={items}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        className="md:px-10"
      >
        <motion.p
          variants={items}
          className="text-h4 md:text-h2 text-D_Gray font-semibold pb-2"
        >
          Helping a local{" "}
          <span className="text-Primary">business reinvent itself</span>
        </motion.p>
        <motion.p variants={items} className="text-Gray text-b4 md:text-b2">
          We reached here with our hard work and dedication
        </motion.p>
      </motion.div>
      <motion.div
        viewport={{
          once: true,
          amount: 0.8,
        }}
        initial="hide"
        whileInView={"visible"}
        variants={items}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        className="grid grid-cols-1 gap-y-4 md:gap-x-10 justify-items-center md:grid-cols-2 md:grid-row-2 place-content-center"
      >
        {statistiques.map((e, i) => (
          <motion.div
            variants={items}
            className="flex items-center gap-4 w-full "
            key={i}
          >
            <Image src={e.pathIcon} width={48} height={48} alt="icon" />
            <div className="flex flex-col justify-between gap-1">
              <p className="text-h4 md:text-h3 text-D_Gray font-semibold">
                <CounteAnimation
                  initialValue={0}
                  targetValue={e.value}
                  duration={4000}
                />
              </p>
              <p className="text-b4 md:text-b2 text-D_Gray">{e.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
