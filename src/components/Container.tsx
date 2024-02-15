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

// interface Response {
//   status: any;
//   data: any;
//   error: any;
// }

export default function Container() {
  // const [movies, setMovies] = useState(movies)
  const { searchQuery } = useSearchStore();


  //
  // const [movieList, setMovieList] = useState<Movie[]>([])
  // *
  const { status, data, error } = useQuery({
    // queryFn: () => fetchMovies(),
    queryFn: async () => {
      return await request("https://react-movie-app-server-backend.onrender.com/", getAllMovies);
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


  // const { mutateAsync: addMovieMutation } = useMutation({
  //   mutationFn: addMovie
  // })

  // *
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // ##################################33
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
              <li key={item.id} className={styles2.card}>
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
  // #############################

  // return (

  //   <div>
  //   <ul className={styles.cardList}>
  //     {filteredMovies.map(item => {
  //       return (
  //         <li key={item.id} className={styles2.card}>
  //           <img src={item.poster}  alt="" className={styles2.cardImage}/>
  //           <div className={styles2.cardContent}>
  //             <h2 className={styles2.cardHeader}>{item.title}</h2>
  //             <span className={styles2.cardItemContent}>Director: {item.director}</span>
  //             <span className={styles2.cardItemContent}>Rating: {item.rating}</span>
  //           </div>
  //         </li>
  //       );
  //     })}
  //   </ul>
  //    </div>

  // );
}
