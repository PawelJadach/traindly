"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

const links = [
  {
    href: "/",
    label: "Strona główna",
  },
  {
    href: "/trainers",
    label: "Trenerzy",
  },
  {
    href: "login",
    label: "Logowanie / Rejestracja",
    button: true,
  },
];

function NavLink({
  label,
  href,
  button = false,
  onClick,
}: {
  label: string;
  href: string;
  button?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      onClick={onClick}
      className={button ? "text-accent-400" : ""}
      href={href}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className="bg-black fixed top-0 w-full">
      <div className="max-w-5xl mx-auto w-full items-center justify-center text-sm flex md:justify-between">
        <Logo />
        <div className="md:hidden">
          <MobileMenu />
        </div>
        <ul className="md:flex gap-6 items-center p-10 hidden">
          {links.map(({ label, button, href }) => (
            <NavLink href={href} label={label} button={button} key={href} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <Menu>
      <Menu.Button className="fixed top-5 left-5 z-10">
        <Bars3Icon className="h-6 w-6 text-white" />
      </Menu.Button>
      <Menu.Items className="fixed inset-0 bg-black flex flex-col align-center justify-center gap-5 text-center">
        {links.map(({ href, button, label }) => (
          <Menu.Item key={href} as={Fragment}>
            {({ close }) => (
              <NavLink
                href={href}
                label={label}
                button={button}
                key={href}
                onClick={close}
              />
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
