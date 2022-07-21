import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'

import styles from './styles.module.scss'

export function Comment() {
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

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
