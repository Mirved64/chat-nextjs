import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import styles from './page.module.css'

const Home = () => (
  <>
    <Header />
    <main className={styles.main} />
    <Footer />
  </>
)

export default Home
