import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "@event/event.entity";
import { Role } from "@auth/enums";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column()
    email: string;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    hash: string;

    @Column()
    roles: Role[];

    @OneToMany((type) => Event, (event) => event.user, { eager: false, onDelete: 'CASCADE' })
    events: Event[];
}
