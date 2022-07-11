import React from "react";
import { useQuery } from "react-query";
import { fetchExample } from "../api";

function CleanCode() {
  const { isLoading, error, data } = useQuery("fetching", fetchExample);

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h5>Id : {item.id}</h5>
          <h5>Title: {item.title}</h5>
          <p>Body: {item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default CleanCode;
