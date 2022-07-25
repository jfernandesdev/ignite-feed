import { useState } from 'react'
import { HandsClapping, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'

import styles from './styles.module.scss'

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
   onDeleteComment(content)
  }

  function handleLinkComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src='https://github.com/jfernandesdev.png'
        alt='Jeferson Fernandes'
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                Jeferson Fernandes <span>(você)</span>
              </strong>
              <time
                title='20 de Julho às 19:32h'
                dateTime='2022-07-20 19:32:00'
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLinkComment}>
            <HandsClapping size={20} /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
