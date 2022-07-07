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
          <h4>
            {item.id} - {item.name} - {item.username} - {item.email}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default CleanCode;
