import { AvatarLogo } from '@/ui/avatar-logo'
import { ChatBar } from '@/ui/chat-bar'
import { Menu } from '@/ui/menu'
import styles from './header.module.css'
import { USERS_LIST } from './mock-data'

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.usersContainer}>
      {USERS_LIST.map((user) => (
        <AvatarLogo user={user} key={user.id} />
      ))}
    </div>
    <div className={styles.chatBarContainer}>
      <ChatBar />
    </div>
    <div className={styles.menuContainer}>
      <Menu />
    </div>
  </header>
)
