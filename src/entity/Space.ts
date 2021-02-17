  
import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";
import { Length } from "class-validator";

@Entity()
export class Space {

    @ObjectIdColumn()
        id!: ObjectID;

    @Column()
        @Length(4, 155)
        carPlate!: string;

    @Column()
        slotNo!: number | string;

}