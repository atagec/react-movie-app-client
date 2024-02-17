import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchStore } from "../state";
import { request, gql } from "graphql-request";

import styles from "./container.module.css";
import styles2 from "./card.module.css";

const getAllMovies = gql`
  query {
    getAllMovies {
      director
      poster
      id
      rating
      title
    }
  }
`;


export default function Container() {
  const { searchQuery } = useSearchStore();



  const { status, data, error } = useQuery({
    // queryFn: () => fetchMovies(),
    queryFn: async () => {
      return await request("http://localhost:4000/", getAllMovies);
      // return await request("http://localhost:4000/", getAllMovies);
    },
    queryKey: ["movies"],
    select: (data: any) => {
      const movies = data["getAllMovies"];
      return movies;
    }
  });

 

  console.log("data", data);
  
  const filteredMovies = useMemo(() => {
    return data?.filter((item: any) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [data, searchQuery]);


  return (
    <>
      {status === "pending" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <ul className={styles.cardList}>
          {filteredMovies?.map((item: any) => {
            return (
              <li data-testid="card-item" key={item.id} className={styles2.card}>
                <img src={item.poster} alt="" className={styles2.cardImage} />
                <div className={styles2.cardContent}>
                  <span className={styles2.cardItemContent}><span className={styles2.cardItemStar}>☆</span>{item.rating}</span>
                  <h2 className={styles2.cardItemContent}>{item.title}</h2>
                  <span className={styles2.cardItemContent}>Director: {item.director}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
