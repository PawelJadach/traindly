import Link from "next/link";
import React from "react";

export default function Button({
  label,
  href,
}: {
  href?: string;
  label: string;
}) {
  const classNames =
    "bg-accent-400 hover:bg-accent-200 transition-all py-2 px-5 rounded-sm inline-block uppercase font-bold text-sm";
  return href ? (
    <Link className={classNames} href={href}>
      {label}
    </Link>
  ) : (
    <button className={classNames + " border-none cursor-pointer"}>
      {label}
    </button>
  );
}
