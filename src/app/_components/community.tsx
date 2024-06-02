"use client";
import Image from "next/image";
import React from "react";
import { Variants, motion } from "framer-motion";
import { it } from "node:test";
const cards = [
  {
    pathIcon: `/images/Icon (3).webp`,
    title: "Membership Organisations",
    paragraph:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    pathIcon: `/images/Icon (2).webp`,
    title: "National Associations",
    paragraph:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    pathIcon: `/images/Icon (1).webp`,
    title: "Clubs And Groups",
    paragraph:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];
const items: Variants = {
  hide: { scale: 0 },
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
export default function Community() {
  return (
    <motion.section
      viewport={{ once: true }}
      variants={container}
      initial="hide"
      whileInView="visible"
      className="w-full flex flex-col items-center px-4 py-2"
    >
      <div className="flex flex-col gap-2 items-center">
        <motion.p
          variants={items}
          className="text-D_Gray text-h4 font-semibold md:text-h2"
        >
          Manage your entire community
        </motion.p>
        <motion.p
          variants={items}
          className="text-D_Gray text-h4 font-semibold md:text-h2"
        >
          in a single system
        </motion.p>
        <motion.p variants={items} className="text-Gray text-b4 md:text-b2">
          Who is Nextcent suitable for?
        </motion.p>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-around w-full gap-6">
        {cards.map((e, i) => (
          <motion.div
            variants={items}
            key={i}
            className="flex flex-col items-center py-6 px-8 shadow-md"
          >
            <Image
              className="pb-4"
              src={e.pathIcon}
              width={65}
              height={56}
              alt="icon 1"
            />
            <p className="md:text-h3 font-semibold text-D_Gray text-h4 text-center pb-3">
              {e.title}
            </p>
            <p className="text-Gray md:text-b3 text-b4 text-center">
              {e.paragraph}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
