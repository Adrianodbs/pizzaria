export class AuthTokenError extends Error{
  constructor (){
    super('Erro de autenticação do token')
  }
}