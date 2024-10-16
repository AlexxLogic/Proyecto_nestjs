import { Module } from '@nestjs/common';
import { RegistrosService } from './registros.service';
import { RegistrosController } from './registros.controller';
import { Registro } from './entities/registro.entity';
import { register } from 'module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Registro])],
  controllers: [RegistrosController],
  providers: [RegistrosService],
})
export class RegistrosModule {}
