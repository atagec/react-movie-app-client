import styles from './searchbar.module.css';
import { useSearchStore } from '../state'; 



export default function SearchBar() {
  
  const { setSearchQuery } = useSearchStore()

  return (
    <div className={styles.searchContainer} data-testid="app-searchbar">
      <input onChange={e => setSearchQuery(e.target.value)} className={styles.searchbar} type="search" name="searchbar" id="searchbar" placeholder="Search movie"/>
    </div>
  )
}