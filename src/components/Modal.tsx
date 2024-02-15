import { useState } from "react";
import styles from "./modal.module.css";
import { useModalStore } from "../state";
import { request, gql } from "graphql-request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Modal() {
  const { closeModal, isOpen } = useModalStore();
  const [directorValue, setDirectorValue] = useState("");
  const [ratingValue, setRatingValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [posterValue, setPosterValue] = useState("");

  const addMovieMutation = gql`
    mutation createMovie($title: String, $poster: String, $director: String, $rating: String) {
      createMovie(title: $title, poster: $poster, director: $director, rating: $rating) {
        title
        poster
        director
        rating
      }
    }
  `;

  const queryClient = useQueryClient();
  const { mutateAsync: addNewMovieMutation } = useMutation({
    mutationFn: async function () {
      console.log("sending request");
      const payload = {
        title: titleValue,
        poster: posterValue,
        director: directorValue,
        rating: ratingValue
      };
      return await request("http://localhost:4000/", addMovieMutation, payload);
    },
    onSuccess: () => {
      console.log("on success");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      alert("Movie successfully added!");
    }
  });

  const validateInputs = () => {
    if (!posterValue.trim().includes("https://")) {
      alert("Please provide a valid image URL.");
      throw new Error("Please provide a valid image URL.");
    }
    if (titleValue.trim() === "" || posterValue.trim() === "" || directorValue.trim() === "" || ratingValue.trim() === "") {
      alert("Please fill out required fields.");
      throw new Error("Please fill out required fields.");
    }
  };

  const resetModalLocalState = () => {
    setTitleValue("");
    setPosterValue("");
    setDirectorValue("");
    setRatingValue("");
    console.log({
      title: titleValue,
      poster: posterValue,
      director: directorValue,
      rating: ratingValue
    });
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalContainer}>
          <div
            className={styles.modalOverlay}
            onClick={() => {
              closeModal(false);
              resetModalLocalState();
            }}
          ></div>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => {
                closeModal(false);
                resetModalLocalState();
              }}
            >
              &times;
            </button>
            <div className={styles.modalInput}>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" value={titleValue} onChange={e => setTitleValue(e.target.value)} required={true} />
            </div>
            <div className={styles.modalInput}>
              <label htmlFor="director">Director</label>
              <input type="text" id="director" value={directorValue} onChange={e => setDirectorValue(e.target.value)} required={true} />
            </div>
            <div className={styles.modalInput}>
              <label htmlFor="rating">Rating</label>
              <input type="text" id="rating" value={ratingValue} onChange={e => setRatingValue(e.target.value)} required={true} />
            </div>
            <div className={styles.modalInput}>
              <label htmlFor="imageurl">Image URL</label>
              <input type="text" id="imageurl" value={posterValue} onChange={e => setPosterValue(e.target.value)} required={true} />
            </div>
            <div className={styles.modalButtonWrapper}>
              <button
                className={styles.addButton}
                onClick={async () => {
                  try {
                    validateInputs();
                    await addNewMovieMutation();
                    resetModalLocalState();
                    closeModal(false);
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                Add Movie
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
