"use client";
import MessageIcon from "@/components/messageIcon";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Dribbel, Integram, Twiter, Youtube } from "@/components/socialIcons";
import Link from "next/link";
const container: Variants = {
  hide: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
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
export default function Footer() {
  return (
    <motion.footer
      variants={container}
      viewport={{ once: true }}
      initial="hide"
      whileInView={"visible"}
      className="bg-Black grid grid-cols-2 grid-rows-5 py-4 px-4 gap-y-7 md:grid-rows-1 md:grid-cols-4 md:py-10 md:px-16"
    >
      <div className="col-start-1 col-end-3 row-start-1 row-end-2 flex flex-col gap-4 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2 pe-2 py-2">
        <motion.p variants={items} className="text-h4 text-white font-semibold">
          Stay up to date
        </motion.p>
        <motion.span
          variants={items}
          className="bg-Gray px-4 flex rounded-md justify-between items-center gap-2 w-full"
        >
          <input
            className="bg-transparent w-full outline-none py-2 text-b3 text-[#D9DBE1] placeholder:text-[#D9DBE1] placeholder:text-b3"
            placeholder="Your email address"
            type="text"
          />
          <MessageIcon className="fill-white" height={18} width={18} />
        </motion.span>
      </div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-4 flex flex-col gap-4 py-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
        <motion.p variants={items} className="text-h4 text-white font-semibold">
          Company
        </motion.p>
        <ul className="flex flex-col gap-2">
          <motion.li variants={items} className="text-b3 text-Silver">
            About Us
          </motion.li>
          <motion.li variants={items} className="text-b3 text-Silver">
            Blog
          </motion.li>
          <motion.li variants={items} className="text-b3 text-Silver">
            Contact Us
          </motion.li>
          <motion.li variants={items} className="text-b3 text-Silver">
            Pricing
          </motion.li>
          <motion.li variants={items} className="text-b3 text-Silver">
            Testimonials
          </motion.li>
        </ul>
      </div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-4 flex flex-col gap-4 py-2 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2">
        <motion.p variants={items} className="text-h4 text-white font-semibold">
          Support
        </motion.p>
        <ul className="flex flex-col gap-2">
          <motion.li variants={items} className="text-b3 text-Silver">
            Help center
          </motion.li>
          <motion.li variants={items} className="text-b3 text-Silver">
            Terms of service
          </motion.li>
          <motion.li variants={items} className="text-b3 text-Silver">
            Legal
          </motion.li>
          <motion.li variants={items} className="text-b3 text-Silver">
            Privacy policy
          </motion.li>
          <motion.li variants={items} className="text-b3 text-Silver">
            Status
          </motion.li>
        </ul>
      </div>
      <div className="col-start-1 col-end-3 row-start-4 row-end-6 py-2 flex flex-col gap-4 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
        <a href="#">
          {" "}
          <motion.div variants={items} className="flex gap-1">
            <motion.span variants={items}>
              {" "}
              <Image
                src={"/images/Icon (8).webp"}
                height={25}
                width={25}
                alt="icon"
              />
            </motion.span>
            <motion.h1
              variants={items}
              className="font-semibold text-h3 text-white"
            >
              Nexcent
            </motion.h1>
          </motion.div>
        </a>
        <div className="flex flex-col gap-2">
          <motion.p variants={items} className="text-b3 text-Silver ">
            Copyright © 2020 Nexcent ltd.
          </motion.p>
          <motion.p variants={items} className="text-b3 text-Silver ">
            All rights reserved
          </motion.p>
        </div>
        <div className="flex gap-3 items-center">
          <motion.span variants={items}>
            <Integram className="fill-white" width={17} height={17} />
          </motion.span>
          <motion.span variants={items}>
            <Dribbel className="fill-white" width={17} height={17} />
          </motion.span>
          <motion.span variants={items}>
            {" "}
            <Twiter className="fill-white" width={15.49} height={13.8} />
          </motion.span>
          <motion.span variants={items}>
            {" "}
            <Youtube className="fill-white" width={17.07} height={13.27} />
          </motion.span>
        </div>
      </div>
    </motion.footer>
  );
}
