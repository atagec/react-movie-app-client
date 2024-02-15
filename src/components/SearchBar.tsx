import styles from './searchbar.module.css';
import { useSearchStore } from '../state'; 



export default function SearchBar() {
  
  const { setSearchQuery } = useSearchStore()

  // const [movies, setMovies] = useState(movies)
  // const [ query, setQuery ] = useState("");

  // const filteredMovies = useMemo(() => {
  //   return movies.filter(item => {
  //     return item.toLowerCase().includes(query.toLowerCase())
  //   })
  // }, [movies, query])

  // console.log('filteredMovies', filteredMovies);

  // const filteredItems = useMemo( () => {
  //   return placeholder.filter(item  => {
  //     return item.toLowerCase().includes(query.toLowerCase())
  //   })
  // }, [items, query] )

  return (
    <div className={styles.searchContainer}>
      <input onChange={e => setSearchQuery(e.target.value)} className={styles.searchbar} type="search" name="searchbar" id="searchbar" placeholder="Search movie"/>
    </div>
  )
}