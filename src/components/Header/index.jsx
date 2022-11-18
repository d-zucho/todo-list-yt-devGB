import styles from './header.module.css'
import Logo from '../../assets/Logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt='' />
    </header>
  )
}
export default Header
