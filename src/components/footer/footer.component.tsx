import { SmileBar } from '@/ui/smile-bar'
import { MessageForm } from '../message-form'
import styles from './footer.module.css'

export const Footer = () => (
  <footer className={styles.footer}>
    <SmileBar />
    <MessageForm />
  </footer>
)
