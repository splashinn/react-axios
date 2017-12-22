import React from 'react';

const ResultsList = ({ data, loadingState, error }) => {
  const hits = data.hits || [];

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loadingState) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h4>Results</h4>
      {hits.map(hit =>
        <div key={hit.objectID}>
          <a href={hit.url}>{hit.title}</a>
        </div>
      )}
    </div>
  );
}

export default ResultsList;
