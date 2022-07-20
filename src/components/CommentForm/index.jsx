import styles from './styles.module.scss'

export function CommentForm() {
  return(
    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea placeholder="Deixe um comentário" />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>
  )
}