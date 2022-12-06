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

    const product = await prismaClient.product.create({
      data:{
        name:name,
        price: price,
        description:description,
        banner:banner,
        category_id:category_id
      }
    })
    return product
  }
}

export {CreateProductService}