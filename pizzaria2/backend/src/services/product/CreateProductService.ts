import prismaClient from "../../prisma";

interface ProductRequest{
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string
}

class CreateProductService{
  async execute({banner,category_id,description,name,price}:ProductRequest){
    return {ok:true}
  }
}

export {CreateProductService}