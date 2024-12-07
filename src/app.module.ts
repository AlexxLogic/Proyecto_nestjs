import { Module } from '@nestjs/common';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RegistrosModule } from './registros/registros.module';
import { AsistenciasModule } from './asistencias/asistencias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'proyectostak',
    entities:[__dirname + '/**/*.entity{.ts,.js}'],
    synchronize:true


  }),ProveedoresModule, UsuariosModule, RegistrosModule, AsistenciasModule],
  controllers: [],
  providers: [],
})
export class AppModule {} 
