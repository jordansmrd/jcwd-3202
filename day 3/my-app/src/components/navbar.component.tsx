/** @format */

import Link from "next/link";

export const NavbarComponent = () => {
  return (
    <nav
      style={{
        background: "black",
        color: "white",
        display: "flex",
        gap: 3,
        padding: 10,
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/settings">Settings</Link>
    </nav>
  );
};
