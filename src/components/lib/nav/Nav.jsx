"use client";
import Link from "next/link";
import styles from "./nav.module.scss";
import { palanquin } from "@/src/utils/fonts";
import { usePathname } from "next/navigation";

function Nav() {
  const route = usePathname();

  const links = [
    {
      href: "/",
      label: "HOME",
    },
    {
      href: "/about",
      label: "ABOUT US",
    },
    {
      href: "/services",
      label: "SERVICES",
    },
    {
      href: "/PAGES",
      label: "PAGE",
    },
    {
      href: "/contact",
      label: "CONTACT US",
    },
    {
      href: "/team",
      label: "OUR TEAM",
    },
  ];

  return (
    <nav className={`${styles.nav} ${palanquin.className}`}>
      <ul>
        {links.map(({ href, label }) => (
          <li
            key={label}
            className={route === href ? "at an active class" : ""}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
