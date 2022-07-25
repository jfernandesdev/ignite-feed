import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from '../Comment'
import { Avatar } from '../Avatar'

import styles from './styles.module.scss'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Post muito bacana eih 👏🏽👏🏽🚀'])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:32'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt={author.name} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}
          className={styles.datePublished}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          switch (line.type) {
            case 'paragraph':
              return <p key={line.content}>{line.content}</p>
            case 'link':
              return (
                <p key={line.content}>
                  👉{' '}
                  <a href={line.content} target='_blank'>
                    {line.content}
                  </a>
                </p>
              )
          }
        })}
        <p>
          <a href='#'>#projeto</a> <a href='#'>#github</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
