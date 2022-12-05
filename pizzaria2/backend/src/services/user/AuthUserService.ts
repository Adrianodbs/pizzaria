import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'

interface AuthRequest{
  email: string;
  password: string
}

class AuthUserService{
  async execute({email, password}:AuthRequest){
    //verificar se o email existe
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(!user){
      throw new Error('Usuário/Senha incorreta')
    }

    //preciso verificar se a senha está correta
    const passwordMatch= await compare(password, user.password)

    if(!passwordMatch){
      throw new Error('Usuário/Senha incorreta')
    }

    //gerar um token JWT e devolver os dados do usuário como ID, name e e-mail

    return{ok: true}
  }
}

export {AuthUserService}