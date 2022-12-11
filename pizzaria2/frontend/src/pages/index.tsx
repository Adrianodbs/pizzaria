import {useContext, FormEvent, useState} from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logo.svg'
import {Input} from '../components/ui/Input'
import { Button } from '../components/ui/Button'

import {toast} from 'react-toastify'

import {AuthContext} from '../contexts/AuthContext'

export default function Home() {

  const {signIn} = useContext(AuthContext)

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)

  async function handleLogin(event: FormEvent){

    event.preventDefault()

    if(email ==='' || password === ''){
      toast.error('Preencha os campos')

      return
    }

    setLoading(true)

    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading (false)
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
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <Input 
              placeholder='Digite a sua senha' 
              type='password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)} 
            />
            <Button 
              type='submit'
              Loading={loading} 
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
