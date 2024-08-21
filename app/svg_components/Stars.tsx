import Image from "next/image";
import stars from "../svg/stars.svg";

const StarsSvg = () => {
  return (
    <div>
      <Image src={stars} alt='Stars' />
    </div>
  );
};

export default StarsSvg;
