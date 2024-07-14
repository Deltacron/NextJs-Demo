import React from 'react';
import Image from "next/image";

type MenuItemProps = {
  text: string;
  iconSrc: string;
  onClick?: () => void;
  className?: string;
};


export const MenuItem: React.FC<MenuItemProps> = ({ text, iconSrc, className, onClick }) => (
  <div className={`flex gap-5 mt-8 text-lg font-medium tracking-wide leading-7 text-black text-opacity-90 ${className}`} onClick={onClick}>
    <div className="flex-auto my-auto">{text}</div>
    <Image loading="lazy" src={iconSrc} alt="" className="shrink-0 w-6 aspect-square" />
  </div>
);