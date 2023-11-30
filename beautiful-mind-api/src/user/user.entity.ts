import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "@event/event.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  isActive: boolean;

  @OneToMany((type) => Event, (event) => event.user, { eager: false, onDelete: 'CASCADE' })
  events: Event[];
}
