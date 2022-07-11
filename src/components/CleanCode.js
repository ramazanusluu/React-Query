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
          <h5>Id: {item.id}</h5>
          <h5>Name: {item.name}</h5>
          <h5>Username: {item.username}</h5>
          <h5>E-mail: {item.email}</h5>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CleanCode;
