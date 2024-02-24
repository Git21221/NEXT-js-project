"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-6 text-sm">
              <HoveredLink href='/'>Home</HoveredLink>
              <HoveredLink href='/about'>About</HoveredLink>
              <HoveredLink href='/user'>User</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href='/courses'>
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-6 text-sm">
              <HoveredLink href="/courses">Our courses</HoveredLink>
              <HoveredLink href="/courses">Our courses1</HoveredLink>
              <HoveredLink href="/courses">Our courses2</HoveredLink>
              <HoveredLink href="/courses">Our courses3</HoveredLink>
              <HoveredLink href="/courses">Our courses4</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href='/contact'>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-6 text-sm">
            <HoveredLink href='/contact'>Contact me</HoveredLink>
          </div>
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
