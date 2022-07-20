import { CommentForm } from '../CommentForm'

import styles from './styles.module.scss'

const post = {
  author: 'Jeferson Fernandes',
  avatar: 'https://github.com/jfernandesdev.png',
  office: 'Web Developer',
}

export function Post() {
  return(
   <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={post.avatar} alt={post.author} />
          <div className={styles.authorInfo}>
            <strong>{post.author}</strong>
            <span>{post.office}</span>
          </div>
        </div>

        <time 
          dateTime="2022-07-20 19:32:00" 
          title="20 de Julho às 19:32"
          className={styles.datePublished}>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz na Trilha de ReactJs do Ignite da Rocketseat. O nome do projeto é Ignite Feed 🚀</p>
      <p>👉{' '}<a href="https://github.com/jfernandesdev/ignite-feed" target="_blank">https://github.com/jfernandesdev/ignite-feed</a></p>
      <p>
        <a href="#">#novoprojeto</a>{' '}
        <a href="#">#github</a>{' '}
        <a href="#">#rocketseat</a>
      </p>
      </div>

      <CommentForm />
   </article>
  ) 
}