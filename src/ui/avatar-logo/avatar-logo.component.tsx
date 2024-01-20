import Image from 'next/image'
import { FC } from 'react'
import { AvatarLogoProps } from './avatar-logo.interfaces'
import styles from './avatar-logo.module.css'

export const AvatarLogo: FC<AvatarLogoProps> = ({ user }) => (
  <div
    className={styles.wrapperUserLogo}
    style={{ zIndex: `${user.id}`, left: `${user.id * 18}px` }}
  >
    <div className={styles.container}>
      <Image
        src={user.logo}
        alt={`logo${user.id}`}
        width={24}
        height={24}
        style={{ borderRadius: '50%' }}
      />
    </div>
  </div>
)
