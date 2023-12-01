import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "@event/event.entity";
import { Role } from "@user/entities";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  hash: string;

  @ManyToMany((type) => Role, (role) => role.users, { eager: true })
  @JoinTable({ name: 'role_user' })
  roles: Role[];

  @OneToMany((type) => Event, (event) => event.user, { eager: false, onDelete: 'CASCADE' })
  events: Event[];
}
