import React from "react";
import { useQuery } from "react-query";

function Example() {
  const { isLoading, error, data } = useQuery("fetching", () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    )
  );
  //*   useQuery > isLoading, error, data parametrelerini veriyor.
  //?   fetching ifadesi bir key'dir istenilen ifade yazılabilir. Daha sonra gerekli durumlarda cache'lenmiş dataya erişebilmek için bu key kullanılır.

  if (isLoading) {
    return "Loading...";
  }
  //Eğer loading işlemi devam ediyorsa ekrana loading ifadesini yazdırabiliyoruz.
  //React Query kullanmadığımızda loading ifadesini ekrana yazdırabilmek için loading adında bir state oluşturup işlmelerimizi onun üzerinden yapıyorduk.
  //error içinde aynı durumlar söz konusu

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

export default Example;
