import styles from './styles.module.scss'
import Header from '../../components/Header'
import {useState, FormEvent} from 'react'

import Head from 'next/head'

export default function Category() {

  const [name, setName] = useState('')

  async function handleRegister (event: FormEvent){
    event.preventDefault()

    alert(name)
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
