import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'registross'})
export class Registro {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string

    @Column()
    peso:string

    @Column({type:'datetime',default:()=>'CURRENT_TIMESTAMP'})
    createdAt:Date

}