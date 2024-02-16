import React from "react";
import { useSearchParams } from "react-router-dom";

function Explore(): React.JSX.Element {
  const [searchParams] = useSearchParams();
  const query: string | null = searchParams.get('query');

  return (
    <div className="p-6">
      This is Explore
    </div>
  );
}

export default Explore;