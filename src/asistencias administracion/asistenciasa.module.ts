import { Module } from '@nestjs/common';
import { AsistenciasService } from './asistenciasa.service';
import { AsistenciasController } from './asistencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsistenciasAdministrador } from './entities/asistencias.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AsistenciasAdministrador])],
  controllers: [AsistenciasController],
  providers: [AsistenciasService],
})
export class AsistenciasAdministradorModule {}
