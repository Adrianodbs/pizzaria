import styles from './styles.module.scss'
import Header from '../../components/Header'
import {useState, FormEvent} from 'react'

import { setupAPIClient } from '../../services/api'

import Head from 'next/head'
import { toast } from 'react-toastify'

export default function Category() {

  const [name, setName] = useState('')

  async function handleRegister (event: FormEvent){
    event.preventDefault()

    if(name === ''){
      return
    }

    const apiClient = setupAPIClient()
    await apiClient.post('/category', {
      name: name
    })

    toast.success('Categoria cadastrada com sucesso')
    setName('')
  }

  return (
    <>
      <Head>
        <title>Nova Categoria - Sujeito Pizzaria</title>
      </Head>

      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastar categorias</h1>

          <form className={styles.form} onSubmit={handleRegister}>
            <input className={styles.input} type="text" placeholder='Digite o nome da categoria' value={name} onChange={(e)=>setName(e.target.value)} />

            <button className={styles.buttonAdd} type='submit'>Cadastrar</button>
          </form>
        </main>
      </div>
    </>
  )
}
