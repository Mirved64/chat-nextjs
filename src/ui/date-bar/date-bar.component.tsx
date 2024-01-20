'use client'

import dayjs from 'dayjs'
import styles from './date-bar.module.css'

export const DateBar = () => {
  const date = dayjs().format('MM/DD/YYYY')
  return (
    <div className={styles.dateBarWrapper}>
      <div className={styles.dateBarContainer}>
        <time className={styles.date}>{date}</time>
      </div>
    </div>
  )
}
