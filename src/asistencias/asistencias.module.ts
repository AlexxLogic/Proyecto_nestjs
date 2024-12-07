import { Module } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { AsistenciasController } from './asistencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asistencias } from './entities/asistencias.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Asistencias])],
  controllers: [AsistenciasController],
  providers: [AsistenciasService],
})
export class AsistenciasModule {}
