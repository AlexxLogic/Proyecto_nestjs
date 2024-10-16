import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Registro } from './entities/registro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrosService {
  constructor(@InjectRepository(Registro) private registroRepository:Repository<Registro>){}

  async create(registro: CreateRegistroDto
  ) {
    try {
      const result = this.registroRepository.create(registro);
    return await this.registroRepository.save(result)
    } catch (error) {
      throw new ConflictException(`error al regstrar`)     
    }
    

  }

  findAll() {
    return this.registroRepository.find();
  }

  async findOne(id: number) {
    const res = await this.registroRepository.findOne({
      where:{
        id: id
      }
    })
  if (!res){
    throw new NotFoundException(`no se encuentra el registro`)
  }
  return res;
  }

  async update(id: number, UpdateRegistroDto: UpdateRegistroDto) {

    const res = await this.registroRepository.update({id},UpdateRegistroDto)
    if (!res){
      throw new NotFoundException(`no se pudo actualizar`)
    }
    return res;
    
  }

  async remove(id: number) {
    const res = await this.registroRepository.delete({id})
    if (!res){
      throw new NotFoundException(`no se encontro el registro`)
    }
    return res;
      
    }
}
 