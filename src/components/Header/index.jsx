import styles from './styles.module.scss'

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header () {
  return(
    <div className={styles.header}>
      <img src={igniteLogo} alt="Logo Ignite Feed" />
      <strong>Ignite Feed</strong>
    </div>
  )
}