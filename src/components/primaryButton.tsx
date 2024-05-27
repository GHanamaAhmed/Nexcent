"use client";
import React, { useState } from "react";
import Spin from "./spin";
import Arrow from "./arrow";
import Plus from "./plus";
type PrimaryButton = {
  icon?: "right" | "left";
  size?: "lg" | "md" | "sm";
  font?: "normal" | "medium" | "small";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isLoading?: boolean;
  text: string;
  disable?: boolean;
};
export default function PrimaryButton({
  icon,
  size,
  font,
  onClick,
  isLoading,
  text,
  disable,
}: PrimaryButton) {
  const [isClick, setIsClick] = useState(false);
  const textSize =
    !size || size == "md" ? "text-base" : size == "lg" ? "text-lg" : "text-sm";
  const textFont =
    !font || font == "normal"
      ? "font-normal"
      : font == "medium"
      ? "font-medium"
      : "font-light";
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setIsClick(true);
        onClick!(e);
      }}
      onBlur={() => {
        setIsClick(false);
      }}
      className={`rounded  focus:border-2 w-fit focus:border-D_Gray px-5 py-10px ${
        disable ? "bg-Silver text-Grey-blue" : "text-white bg-Primary "
      }${textSize} ${textFont} ${isClick || isLoading ? "bg-Shade2" : ""}`}
    >
      {icon == "left" && (
        <Plus
          className={`${disable ? "stroke-Grey-blue" : "stroke-Primary"}`}
          width={!size || size == "lg" ? 24 : 16}
          height={!size || size == "lg" ? 24 : 16}
        />
      )}
      {text}
      {icon == "right" && (
        <Arrow
          className={`${disable ? "stroke-Grey-blue" : "stroke-Primary"}`}
          width={!size || size == "lg" ? 24 : 16}
          height={!size || size == "lg" ? 24 : 16}
        />
      )}
      {isLoading && (
        <Spin
          className={`animate-spin ${
            disable ? "stroke-Grey-blue" : "stroke-Primary"
          }`}
          width={!size || size == "lg" ? 24 : 16}
          height={!size || size == "lg" ? 24 : 16}
        />
      )}
    </button>
  );
}
