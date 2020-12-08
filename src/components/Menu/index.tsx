import React from 'react'
import styles from './styles.module.scss'
import { BsFillExclamationSquareFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

export const Menu: React.FC = () => {
  return (
    <main className={styles.main}>
      <nav className={styles.menu}>
        <a className={styles.brand} href="#">
          <BsFillExclamationSquareFill />
        </a>
        <button className={styles.toggle}>
          <GiHamburgerMenu />
        </button>
        <div className={styles.navMenu}>
          <ul>
            <li>
              <a className={styles.active} href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Sobre Min</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Portfólio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  )
}
