import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { Asistencias } from './entities/asistencias.entity';

@Injectable()
export class AsistenciasService {
  constructor(@InjectRepository(Asistencias) private AsistenciasRepository:Repository<Asistencias>){}

  async create(createAsistenciaDto: CreateAsistenciaDto) {
    try {
      const result = this.AsistenciasRepository.create(createAsistenciaDto);
      return await this.AsistenciasRepository.save(result)
    }
    catch (error) {
      console.log(error)
      throw new ConflictException(`este el docente ya esta registrado`)     
    }
  }

  findAll() {
    return this.AsistenciasRepository.find();
  }

  async findOne(id: number) {
    const res = await this.AsistenciasRepository.findOne({
      where:{
        id: id
      }
    })
  if (!res){
    throw new NotFoundException(`no se encontro el proveedor`)
  }
  return res;
  }

  async update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    const res = await this.AsistenciasRepository.update({id},updateAsistenciaDto)
    if (!res){
      throw new NotFoundException(`no se ha encontrado el proveedor`)
    }
    return res;
    
  }

  async remove(id: number) {
    const res = await this.AsistenciasRepository.delete({id})
  if (!res){
    throw new NotFoundException(`no se ha encontrado el producto`)
  }
  return res;
  }
}
