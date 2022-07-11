//? Tüm API call'larının tek bir dosya altından gerçekleştirilmesi

import axios from "axios";

export const fetchExample = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

export const InfiniteExample = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`
  );
  return data;
};
