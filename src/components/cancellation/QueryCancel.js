import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import CancelNav from "../Navbar/CancelNav";

function QueryCancel() {
  const [queryKey] = useState("todos");

  const query = useQuery(queryKey, async ({ signal }) => {
    const resp = await fetch("/https://jsonplaceholder.typicode.com/todos", {
      signal,
    });
    return resp.json();
  });

  const queryClient = useQueryClient();

  console.log("Query: ", query);
  return (
    <div>
      <CancelNav />
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          queryClient.cancelQueries(queryKey);
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default QueryCancel;
