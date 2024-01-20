import Image from 'next/image'
import styles from './bot-logo.module.css'

export const BotLogo = () => (
  <div className={styles.botLogoWrapper}>
    <div>
      <Image src={'/user-logo-first.svg'} alt={'bot Logo'} width={32} height={32} />
    </div>
    <div className={styles.indicatorWrapper}>
      <div className={styles.indicatorWhite}>
        <div className={styles.indicatorGreen} />
      </div>
    </div>
  </div>
)
