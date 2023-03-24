import { Root } from "@/types/words";
import RessListItem from "./RessListItem";

const RessList = ({ data }: { data: Root }) => {
  return (
    <div className="results-list">
      {data.map((ell, indx) => (
        <RessListItem
          title={ell.meanings[0].partOfSpeech}
          definition={ell.meanings[0].definitions[0].definition}
          example={ell.meanings[0].definitions[0].example}
          key={indx}
        />
      ))}
    </div>
  );
};
export default RessList;
