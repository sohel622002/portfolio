"use client";

import { MouseEvent } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

interface NavLinkPropTypes {
  linkName: string;
  link: string;
}

export function NavLink({ linkName, link }: NavLinkPropTypes) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const smoother = ScrollSmoother.get();

    if (!smoother) {
      console.warn("ScrollSmoother is not initialized");
      return;
    }

    smoother.scrollTo(link, true);
  };

  return (
    <a
      className="hidden rounded-full px-4 py-2 font-medium text-foreground/80 transition hover:bg-(--sunshine-soft) hover:text-foreground sm:inline-block"
      href={link}
      onClick={handleClick}
    >
      {linkName}
    </a>
  );
}