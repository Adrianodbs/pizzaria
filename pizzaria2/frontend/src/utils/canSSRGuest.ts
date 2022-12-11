import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from 'next'
import {parseCookies} from 'nookies'

//Função para páginas que só podem ser visitadas por não logados

export function canSSRGuest<P> (fn: GetServerSideProps<P>){

  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

    const cookies = parseCookies(ctx)

    //Se tentar acessar a página já tendo um login salvo, redirecionamos
    if(cookies['@nextauth.token']){
      return {
        redirect:{
          destination:'/dashboard',
          permanent: false
        }
      }
    }

    return await fn(ctx)

  }

}