import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:String;

    @Column()
    name:String;

    @Column()
    passWord:String;

    @Column()
    userName:String;
}
