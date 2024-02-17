import styles from './title.module.css'

export default function Title() {
  return (
    <div className={styles.title} data-testid="app-title">
      <h1>React Movie App</h1>
    </div>
  )
}