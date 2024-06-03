"use client";
import PrimaryButton from "@/components/primaryButton";
import SecondaryButton from "@/components/secondaryButton";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  Variants,
  MotionConfig,
  animate,
  motionValue,
  useTransform,
  useInView,
} from "framer-motion";
import Link from "next/link";

const variants: Variants = {
  up: {
    translateY: "-50%",
    opacity: 0,
  },
  initial: {
    translateY: 0,
    opacity: 1,
  },
};

export default function Header() {
  const translateX = motionValue(100);
  const _translateX = useTransform(translateX, [100, 0], [-100, 0]);
  const opacity = useTransform(translateX, [100, 0], [0, 1]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  const [hasAnimated, setHasAnimated] = useState(false);

  useLayoutEffect(() => {
    if (isInView) {
      animate(translateX, 0, { duration: 1 })
    }
  }, [isInView]);

  return (
    <header
      ref={ref}
      className="w-full flex justify-around items-center py-2 bg-Silver overflow-hidden"
    >
      <MotionConfig
        transition={{
          duration: 1,
        }}
      >
        <Link href="#">
          <motion.span
            style={{
              translateX: _translateX,
              opacity,
            }}
            className="flex gap-1"
          >
            <Image
              src={"/images/Icon.webp"}
              height={25}
              width={25}
              alt="icon"
            />
            <h5 className="font-semibold ">Nexcent</h5>
          </motion.span>
        </Link>

        <motion.ul
          variants={variants}
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
          style={{
            translateX: translateX,
            opacity,
          }}
          className="flex gap-1"
        >
          <SecondaryButton font="medium" text="Sign in" />
          <PrimaryButton font="medium" text="Sign up" />
        </motion.div>
      </MotionConfig>
    </header>
  );
}
