import prismaClient from '../../prisma'

interface UserRequest{
  name: string;
  email: string;
  password: string
}

class CreateUserService{
  async execute ({name, email, password}:UserRequest){

    //verificar se ele enviou um email
    if(!email){
      throw new Error("Email incorreto")
    }

    //verificar se esse email já está cadastrado na plataforma
    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })
    if(userAlreadyExists){
      throw new Error('Email já está cadastrado')
    }

    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password: password
      },
      //O select é para informar o que você quer devolver, principalmento por questões de segurança, como por exemplo não devolver a senha
      select:{
        id:true,
        email:true,
        name:true
      }
    })

    return {user}
  }
}

export {CreateUserService}