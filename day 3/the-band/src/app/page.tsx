/** @format */

import CardListComponent from "@/components/cardlist.component";
import { CarouselComponent } from "@/components/carousel.component";
import ContentComponent from "@/components/content.component";
import { NavbarComponent } from "@/components/navbar.component";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <CarouselComponent />
      <ContentComponent />
    </>
  );
}
