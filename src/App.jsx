import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.scss'
import './global.scss'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>Timeline</main>
      </div>
    </>
  )
}
