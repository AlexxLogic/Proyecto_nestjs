import { Module } from '@nestjs/common';
import { AsistenciasService } from './asistenciasa.service';
import { AsistenciasController } from './asistencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asistenciasobrero } from './entities/asistencias.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Asistenciasobrero])],
  controllers: [AsistenciasController],
  providers: [AsistenciasService],
})
export class AsistenciasObreroModule {}
