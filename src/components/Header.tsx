import styles from "./header.module.css";


import SearchBar from "./SearchBar";
import ModalButton from "./ModalButton";

export default function Header() {

  return (
    <div className={styles.header}>
      <SearchBar />
      <ModalButton />
     
    </div>
  );
}
