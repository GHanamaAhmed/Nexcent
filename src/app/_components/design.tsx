import PrimaryButton from "@/components/primaryButton";
import Image from "next/image";
import React from "react";

export default function Design() {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 md:items-center	 justify-items-center px-4 py-4 gap-y-12">
      <div className="relative w-[248px] h-[247px] md:w-[441px] md:h-[433px]">
        <Image src={"/images/pana.webp"} fill alt="pana" />
      </div>
      <div className="">
        <p className="text-D_Gray text-h4 md:text-h2 font-semibold mb-4">
          How to design your site footer like we did
        </p>
        <p className="text-Gray text-b4 md:text-b3 mb-8">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <PrimaryButton text="Learn More" font="medium" size="sm"/>
      </div>
    </section>
  );
}
