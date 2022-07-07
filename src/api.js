//? Tüm API call'larının tek bir dosya altından gerçekleştirilmesi

import axios from "axios";

export const fetchExample = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};
