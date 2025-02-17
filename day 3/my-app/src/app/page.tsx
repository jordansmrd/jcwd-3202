/** @format */

import CarouselComponent3 from "@/components/carousel.component";
import {
  CarouselComponent,
  CarouselComponent2,
} from "../components/carousel.component";
export default function Home() {
  return (
    <div className="red" style={{ fontFamily: "monospace" }}>
      hello ini landing page
      <CarouselComponent name={"hello world"} />
      <CarouselComponent2 name="jordan" email="jordan@mail.com" />
      <CarouselComponent3 />
    </div>
  );
}

// component
// component adalah kepingan ui
