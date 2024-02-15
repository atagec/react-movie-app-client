import styles from "./header.module.css";


import Modal from "./Modal";
import SearchBar from "./SearchBar";
import ModalButton from "./ModalButton";

export default function Header() {
  // const { isOpen } = useModalStore()

  return (
    <div className={styles.header}>
      <SearchBar />
      <ModalButton />
     
      <Modal />
    </div>
  );
}
