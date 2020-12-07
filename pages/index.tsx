import React from 'react'
import Head from 'next/head'
import styles from '../styles/theme/theme.module.scss'
import { BsFillExclamationSquareFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

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
                <a href="#">Home</a>
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

      <section className={styles.title}>
        <div className={styles.indicator}>
          <ul>
            <li className={styles.active}></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1>
            DESENVOLVEDOR
            <br />
            <span className={styles.textSecondary}>FULL-STACK</span>
            <br />
          </h1>
          <h4>
            SEJA BEM VINDO AO MEU MUNDO! ME CHAMO{' '}
            <span className={styles.textSecondary}>JOÃO AUGUSTO</span>
            <br /> E TENHO MAIS DE 6 ANOS DE EXPERIÊNCIA <br /> NA ÁREA DE
            PROGRAMAÇÃO E DESIGN.
          </h4>
          <p>
            Desenvolvendo novas soluções e sempre buscando a inovação e o bom{' '}
            <br />
            relacionamento com todos os meus clientes e amigos de trabalho.
          </p>
          <button type="button" className={styles.buttonSecondary}>
            Quer saber mais sobre mim?
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
