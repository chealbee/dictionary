const RessListItem = ({
  title,
  definition,
  example,
}: {
  title: string;
  definition: string;
  example?: string;
}) => {
  return (
    <div className="results-item">
      <div className="results-item__part">{title}</div>
      <div className="results-item__definitions">
        <div className="results-item__definition">
          <p>{definition}</p>
          {example ? (
            <div className="results-item__example">
              <p>
                Example: <span>{example}</span>
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default RessListItem;
