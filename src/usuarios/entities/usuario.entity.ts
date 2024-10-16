import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'usuarios'})
export class usuario {
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    nombre:string

    @Column({unique:true})
    correo:string

    @Column()
    password:string

    @Column({type:'datetime',default:()=>'CURRENT_TIMESTAMP'})
    createdAt:Date

}