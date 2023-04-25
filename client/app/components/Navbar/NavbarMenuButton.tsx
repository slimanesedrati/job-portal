import styles from './NavbarMenuButton.module.css'

interface NavbarMenuButtonProps {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const NavbarMenuButton: React.FC<NavbarMenuButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      type='button'
      onClick={()=>{setIsOpen(prev=>!prev)}} 
      className={` ${styles.hamburger} block lg:hidden focus:outline-none`}>
        <span className={styles.hamburgerTop}></span>
        <span className={styles.hamburgerMiddle}></span>
        <span className={styles.hamburgerBottom}></span>
    </button>
  )
}

export default NavbarMenuButton