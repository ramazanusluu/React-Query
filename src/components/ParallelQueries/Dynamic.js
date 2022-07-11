import React from "react";
import ParallelNav from "../Navbar/ParallelNav";
import { useQueries } from "react-query";
import { fetchDynamic } from "../../api";

function Dynamic({ users }) {
  const userQueries = useQueries(
    users.map((user) => {
      return {
        queryKey: ["user", user],
        queryFn: () => fetchDynamic(user),
      };
    })
  );
  console.log({ userQueries });
  return (
    <div>
      <ParallelNav />
      <h1>Dynamic Parallel Queries</h1>
    </div>
  );
}

export default Dynamic;
