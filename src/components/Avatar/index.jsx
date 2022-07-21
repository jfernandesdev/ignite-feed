import styles from './styles.module.scss'

export function Avatar({ hasBorder = true, src, alt }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  )
}
