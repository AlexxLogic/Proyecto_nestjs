import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'personaladministrador'})
export class AsistenciasAdministrador {
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    nombreApellido:string

    @Column({unique:true})
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