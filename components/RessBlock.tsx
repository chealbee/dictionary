import Image from "next/image";
import imagesrc from "../public/sound.png";

const RessBlock = ({ world, sound }: { world: string; sound?: string }) => {
  const volume = () => {
    if (sound) {
      new Audio(sound).play();
    }
  };
  return (
    <div className="results-info">
      <div className="results-word">{world}</div>
      <div className="results-sound">
        <Image
          src={imagesrc}
          alt="sound button"
          width={100}
          height={100}
          onClick={volume}
        />
      </div>
    </div>
  );
};
export default RessBlock;
