import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedore } from './entities/proveedore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedoresService {

  constructor(@InjectRepository(Proveedore) private provedorRepository:Repository<Proveedore>){}


  async create(provedore: CreateProveedoreDto) {
    try {
      const result = this.provedorRepository.create(provedore);
    return await this.provedorRepository.save(result)
    } catch (error) {
      throw new ConflictException(`este proveedor ya esta registrado`)     
    }
    

  }


  findAll() {
    return this.provedorRepository.find();
  }


  async findOne(id: number) {
    const res = await this.provedorRepository.findOne({
      where:{
        id: id
      }
    })
  if (!res){
    throw new NotFoundException(`no se encontro el proveedor`)
  }
  return res;
  }


  async update(id: number, updateProveedoreDto: UpdateProveedoreDto) {

    const res = await this.provedorRepository.update({id},updateProveedoreDto)
    if (!res){
      throw new NotFoundException(`no se ha encontrado el proveedor`)
    }
    return res;
    
  }


  async remove(id: number) {
  const res = await this.provedorRepository.delete({id})
  if (!res){
    throw new NotFoundException(`no se ha encontrado el producto`)
  }
  return res;
    
  }
}
