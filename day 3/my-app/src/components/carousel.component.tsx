/** @format */

export const CarouselComponent = (props: { name: string }) => {
  return <div> ini {props.name}</div>;
};
type TProps = {
  name: string;
  email?: string;
};
export const CarouselComponent2 = ({ name, email }: TProps) => {
  return (
    <div>
      ini {name} {email}
    </div>
  );
};

export default function CarouselComponent3() {
  return <div> ini carousel 3</div>;
}

// export default function CarouselComponent4() {
//   return <div> ini carousel 3</div>;
// } tidak bisa
