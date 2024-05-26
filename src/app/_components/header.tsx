import PrimaryButton from "@/components/primaryButton";
import SecondaryButton from "@/components/secondaryButton";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="w-full flex justify-around items-center py-2">
      <span className="flex gap-1">
        <Image src={"/images/Icon.webp"} height={25} width={25} alt="icon" />
        <h5 className="font-semibold ">Nexcent</h5>
      </span>
      <ul className="flex gap-3 font-normal text-base">
        <li>Home</li>
        <li>Service</li>
        <li>Feature</li>
        <li>Product</li>
        <li>Testimonial</li>
        <li>FAQ</li>
      </ul>
      <div className="flex gap-1">
        <SecondaryButton font="medium" text="Sign in" />
        <PrimaryButton font="medium" text="Sign up" />
      </div>
    </header>
  );
}
