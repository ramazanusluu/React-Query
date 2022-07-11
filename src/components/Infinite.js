import React from "react";
import { useInfiniteQuery } from "react-query";
import { InfiniteExample } from "../api";

function Infinite() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("InfiniteQueries", InfiniteExample, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 10;
      if (!morePagesExist) {
        return;
      }
      return allGroups.length + 1;
    },
  });

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "error") {
    return "An error has occurred: " + error.message;
  }
  console.log("data", data);
  return (
    <div>
      {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.map((item) => (
            <div key={item.id}>
              <h5>Id : {item.id}</h5>
              <h5>Title: {item.title}</h5>
              <p>Body: {item.body}</p>
              <hr />
            </div>
          ))}
        </React.Fragment>
      ))}
      <div>
        <button
          className="button"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    </div>
  );
}

export default Infinite;
