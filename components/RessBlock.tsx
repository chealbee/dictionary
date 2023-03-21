import Image from "next/image";
import imagesrc from "../public/sound.png";

const RessBlock = () => {
  return (
    <div className="results-info">
      <div className="results-word">ress world</div>
      <div className="results-sound">
        <Image src={imagesrc} alt="sound button" width={100} height={100} />
      </div>
    </div>
  );
};
export default RessBlock;
