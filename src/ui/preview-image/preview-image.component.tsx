import Image from 'next/image'
import { FC } from 'react'
import { PreviewImageProps } from './preview-image.interfaces'
import styles from './preview-image.module.css'
export const PreviewImage: FC<PreviewImageProps> = ({ imageURL }) => (
  <div className={styles.previewImageWrapper}>
    <Image
      src={imageURL}
      alt={'upload_img'}
      width={100}
      height={100}
      style={{ width: '100%', height: 'auto' }}
    />
  </div>
)
