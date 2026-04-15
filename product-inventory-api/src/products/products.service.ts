import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/products.entity';
import { Repository, ILike } from 'typeorm';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {}

async create(dto) {
    const product = this.productsRepository.save(dto);
    return {message: 'Product created successfully', data: product};
}

async findAll() {
    const products = await this.productsRepository.find();
    return {message: 'Products retrieved successfully', count: products.length, data: products};
}

async findOne(id: number) {
    const product = await this.productsRepository.findOneBy({id});
    return {message: 'Product retrieved successfully', data: product};
}

async update(id: number, dto: PartialUpdateProductDto) {
    await this.productsRepository.update(id, dto);
    const updatedProduct = await this.productsRepository.findOneBy({id});
    return {message: 'Product updated successfully', data: updatedProduct};
}

async replace(id: number, dto: UpdateProductDto) {
    await this.productsRepository.delete(id);
    const product = await this.productsRepository.save({...dto, id});
    return {message: 'Product replaced successfully', data: product};
}

async remove(id: number) {
    await this.productsRepository.delete(id);
    return {message: 'Product removed successfully'};
}
async findByCategory(category: string) {
    const products = await this.productsRepository.findBy({category});
    return {message: 'Products retrieved successfully', count: products.length, data: products};
    
} 
async search(keyword: string) {
    const data = await this.productsRepository.find({
        where: {
            name: ILike(`%${keyword}%`)
        },
    });
    return {message: 'Products retrieved successfully', data: data};
} 

async toggleActive(id: number) {
    const product = await this.productsRepository.findOneBy({id});
    if (!product) { 
        throw new NotFoundException('Product not found');
    }
    product.isActive = !product.isActive;
    await this.productsRepository.save(product);
    return {message: 'Product active status toggled successfully', data: product};  
}
}