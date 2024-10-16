import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'proveedores'})
export class Proveedore {
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    nombre:string

    @Column({unique:true})
    correo:string

    @Column()
    telefono:number

    @Column({type:'datetime',default:()=>'CURRENT_TIMESTAMP'})
    createdAt:Date

    @Column({})
    token:string

} 