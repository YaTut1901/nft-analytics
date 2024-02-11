import React from "react";
import { useSearchParams } from "react-router-dom";

function Explore(): React.JSX.Element {
  const [searchParams] = useSearchParams();
  const query: string | null = searchParams.get('query');

  return (
    <div>
      <h2>Explore Component</h2>
      <p>Parameter from URL: {query}</p>
    </div>
  );
}

export default Explore;