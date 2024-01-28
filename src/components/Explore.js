import React from "react";
import { useSearchParams } from "react-router-dom";

function Explore() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    return (
      <div>
        <h2>Explore Component</h2>
        <p>Parameter from URL: {query}</p>
      </div>
    );
}

export default Explore;