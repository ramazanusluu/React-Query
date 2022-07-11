import React from "react";
import ParallelNav from "../Navbar/ParallelNav";
import { useQuery } from "react-query";
import { fetchUser } from "../../api";
import { fetchPosts } from "../../api";
import { fetchTodos } from "../../api";

function Manuel() {
  const usersQuery = useQuery("fetch-user", fetchUser);
  const postsQuery = useQuery("fetch-posts", fetchPosts);
  const todosQuery = useQuery("fetch-todos", fetchTodos);
  console.log("UsersQuery", usersQuery);
  console.log("PostsQuery", postsQuery);
  console.log("TodosQuery", todosQuery);
  return (
    <div>
      <ParallelNav />
      <h1>Manuel Parallel Queries</h1>
    </div>
  );
}

export default Manuel;
