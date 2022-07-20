import { PencilLine } from 'phosphor-react'
import styles from './styles.module.scss'

const profile = {
  name: 'Jeferson Fernandes',
  office: 'Web Developer', 
  avatar: 'https://github.com/jfernandesdev.png',
  frontCover: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40'
}

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={profile.frontCover}
      />

      <div className={styles.profile}>
        <img src={profile.avatar} alt={profile.name} />
        <strong>{profile.name}</strong>
        <span>{profile.office}</span>
      </div>

      <footer>
        <a href='#'><PencilLine size={20}/>Editar seu perfil</a>
      </footer>
    </aside>
  )
}
