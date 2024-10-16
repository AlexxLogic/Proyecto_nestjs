import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {

  constructor(@InjectRepository(usuario) private usuariosRepository:Repository<usuario>){}

  async create(usuario: CreateUsuarioDto) {
    try {
      const result = this.usuariosRepository.create(usuario);
    return await this.usuariosRepository.save(result)
    } catch (error) {
      throw new ConflictException(`este usuario ya esta registrado`)     
    }
    

  }
 
  findAll() {
    return this.usuariosRepository.find();
  }

  async findOne(id: number) {
    const res = await this.usuariosRepository.findOne({
      where:{
        id: id
      }
    })
  if (!res){
    throw new NotFoundException(`no se encontro el usuario`)
  }
  return res;
  }

  async update(id: number, updateProveedoreDto: UpdateUsuarioDto) {

    const res = await this.usuariosRepository.update({id},updateProveedoreDto)
    if (!res){
      throw new NotFoundException(`no se ha encontrado el usuario`)
    }
    return res;
    
  }

  async remove(id: number) {
    const res = await this.usuariosRepository.delete({id})
    if (!res){
      throw new NotFoundException(`no se ha encontrado el usuario`)
    }
    return res;
      
    }
}
