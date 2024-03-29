import styles from "./modalbutton.module.css";
import { useModalStore } from "../state";

export default function ModalButton() {
  const { openModal } = useModalStore();


  return (
    <button data-testid="add-movie-button" className={styles.modalButton} onClick={() => openModal(true)}>
      Add New Movie
    </button>
  );
}
