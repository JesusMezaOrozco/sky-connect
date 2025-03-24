"use client";
import React from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { useTheme } from "@/providers/ThemeProvider";
import { themes } from "@/constants";

const Theme = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Menubar className="relative shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="">
          {theme === "light" ? (
            <Image
              src="/icons/sun.svg"
              alt="Light Theme"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <Image
              src="/icons/moon.svg"
              alt="Dark Theme"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute -right-12 mt-3 min-w-[120px] rounded bg-[var(--dark)] py-2">
          {themes.map((mode) => (
            <MenubarItem
              key={mode.value}
              onClick={() => {
                setTheme(mode.value);
                if (mode.value !== "system") {
                  localStorage.theme = mode.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
              className="dark:focus:bg-dark-400 flex items-center gap-4 px-2.5 py-2"
            >
              <Image src={mode.icon} alt={mode.label} width={16} height={16} />
              <p>{mode.label}</p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
