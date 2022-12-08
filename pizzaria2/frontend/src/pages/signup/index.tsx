import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/home.module.scss'

import logoImg from '../../../public/logo.svg'
import {Input} from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

export default function Signup() {
  return (
    <>
      <Head>
        <title>Faça o seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt='Logo Sujeito Pizzaria' />
        <div className={styles.login}>
          <h1>Criando a sua conta</h1>
          <form>
            <Input 
              placeholder='Digite o seu nome' 
              type='text' 
            />
            <Input 
              placeholder='Digite o seu E-mail' 
              type='text' 
            />
           
            <Input placeholder='Digite a sua senha' type='password' />
            <Button 
              type='submit'
              Loading={false}
            >
              Cadastrar
            </Button>
          </form>

          <Link  className={styles.text} href='/'>
            Já possui uma conta? Faça login.
          </Link>
          
        </div>
      </div>
    </>
  )
}
