import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logo.svg'
import {Input} from '../components/ui/Input'

export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça o seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt='Logo Sujeito Pizzaria' />
        <div className={styles.login}>
          <form>
            <Input placeholder='Digite o seu E-mail' type='text' />
            <Input placeholder='Digite a sua senha' type='password' />
          </form>
        </div>
      </div>
    </>
  )
}
