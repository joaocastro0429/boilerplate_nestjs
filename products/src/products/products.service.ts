import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { prisma } from '../lib/prisma';

@Injectable()
export class ProductsService {
  create(data: CreateProductDto) {
    return prisma.product.create({data});
    
  }

  findAll() {
    return prisma.product.findMany()
  }

  findOne(id: string) {
    return prisma.product.findUnique({where:{id}})
  }

 update(id: string, data: UpdateProductDto) {
    return prisma.product.update({ where: { id }, data });
  }

  remove(id: string) {
    return prisma.product.delete({where:{id}})
}

}