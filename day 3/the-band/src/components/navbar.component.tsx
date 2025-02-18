/** @format */

import Link from "next/link";

/** @format */
export const NavbarComponent = () => {
  return (
    <nav>
      <Link href="#">home</Link>
      <Link href="#">band</Link>
      <Link href="#">tour</Link>
      <Link href="#">contact</Link>
      <Link href="#content">more</Link>
    </nav>
  );
};
