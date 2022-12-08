import {useContext, FormEvent} from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logo.svg'
import {Input} from '../components/ui/Input'
import { Button } from '../components/ui/Button'

import {AuthContext} from '../contexts/AuthContext'

export default function Home() {

  const {signIn} = useContext(AuthContext)

  async function handleLogin(event: FormEvent){

    event.preventDefault()

    let data = {
      email: "teste@teste.com",
      password: "123123"
    }

    await signIn(data)
  }
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça o seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt='Logo Sujeito Pizzaria' />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input 
              placeholder='Digite o seu E-mail' 
              type='text' 
            />
            <Input placeholder='Digite a sua senha' type='password' />
            <Button 
              type='submit'
              Loading={false}
            >
              Acessar
            </Button>
          </form>

          <Link  className={styles.text} href='/signup'>
            Não possui uma conta? Cadastre-se
          </Link>
          
        </div>
      </div>
    </>
  )
}
