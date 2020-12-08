import React from 'react'
import styles from '../styles/theme/theme.module.scss'
import { Menu } from '../components/Menu'

const Home: React.FC = () => {
  return (
    <div>
      <Menu />
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
