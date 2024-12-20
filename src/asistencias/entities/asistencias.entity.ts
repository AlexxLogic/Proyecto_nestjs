import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'personalDocente'})
export class Asistencias {
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    nombreApellido:string

    @Column()
    diasTotales:number

    @Column()
    diasAsistidos:number
    
    @Column()
    noJustificadas:number

    @Column()
    siJustificadas:number

    @Column({type:'datetime',default:()=>'CURRENT_TIMESTAMP'})
    created:Date

} 