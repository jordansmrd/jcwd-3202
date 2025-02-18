/** @format */

import CardComponent from "@/components/card.component";
import { TCard } from "@/interfaces/card.interface";

export default function Home() {
  const post: TCard = {
    name: "Arneo Paris",
    location: "Arneo",
    avatar_url:
      "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tpxme1tpxbpchi3cnoo4",
    image_url: "https://www.torrecastiglione.it/images/territorio/43.jpg",
    username: "ArthurHazan",
    caption:
      "Quel plaisir de retrouver mes étudiants de Web 2 ! Ils ont tellement progressés depuis l’année dernière ! #Proud",
  };
  return (
    <div>
      <CardComponent {...post} />
    </div>
  );
}
