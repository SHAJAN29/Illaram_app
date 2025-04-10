import { illaramColors } from "@/constants";
import React from "react";

export const Footer = () => {
  const {
    illaramPrimary,
    illaramPrimaryDark,
    illaramAccent,
    illaramAccentDark,
    illaramBackground,
    illaramBackgroundDark,
    illaramText,
    illaramTextDark,
  } = illaramColors.colors;
  // const { illaramPrimary } = colors;

  return (
    <footer
      className={`flex items-center justify-center w-full h-20 bg-[${illaramPrimary}] text-white`}
    >
      <p>© 2023 Illaram Healthcare. All rights reserved.</p>
    </footer>
  );
};
