import styles from './styles.module.scss'
import Link from 'next/link'

import {FiLogOut} from 'react-icons/fi'

import { AuthContext } from '../../contexts/AuthContext' 
import {useContext} from 'react'

export default function Header() {

  const {signOut} = useContext(AuthContext)

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href='/dashboar'>
          <img src='/logo.svg' width={190} height={60} />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category">
            <p>Categoria</p>
          </Link>
          <Link href="/product">
            <p>Cardapio</p>
          </Link>

          <button onClick={signOut}>
            <FiLogOut color='#fff' size={23} />
          </button>
        </nav>
      </div>
    </header>
  )
}
