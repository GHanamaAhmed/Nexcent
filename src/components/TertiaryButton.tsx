"use client";
import React, { useState } from "react";
import Spin from "./spin";
import Arrow from "./arrow";
import Plus from "./plus";
type PrimaryButton = {
  icon?: "right" | "left";
  size?: "lg" | "md" | "sm";
  font?: "normal" | "medium";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isLoading?: boolean;
  text: string;
  disable?: boolean;
};
export default function TertiaryButton({
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
    !size || size == "lg" ? "text-lg" : size == "md" ? "text-md" : "text-sm";
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
      className={`rounded focus:border-D_Gray ${
        disable ? "bg-Silver text-Grey-blue" : "text-Primary hover:bg-Silver "
      }${textSize} ${textFont} ${isClick || isLoading ? "bg-Tint5" : ""}`}
    >
      {icon == "left" && (
        <Plus
          className={`${disable ? "stroke-Grey-blue" : "stroke-Primary"}`}
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
          className={`${disable ? "stroke-Grey-blue" : "stroke-Primary"}`}
          width={!size || size == "lg" ? 24 : 16}
          height={!size || size == "lg" ? 24 : 16}
        />
      )}
    </button>
  );
}
