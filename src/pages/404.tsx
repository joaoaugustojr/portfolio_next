import React from 'react'
import { Menu } from '../components/Menu'
import styles from '../styles/theme/theme.module.scss'
import { GoAlert } from 'react-icons/go'
import { IoIosArrowBack } from 'react-icons/io'

const Custom404: React.FC = () => {
  return (
    <>
      <Menu />
      <div className={styles.error404}>
        <GoAlert className={styles.icon} />
        <h2>404 - Página Não Encontrada!</h2>
        <a className={styles.linkSecondary} href="/">
          <IoIosArrowBack />
          Voltar para a Home
        </a>
      </div>
    </>
  )
}

export default Custom404
