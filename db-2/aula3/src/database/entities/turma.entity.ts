// Entidade para representar o Growdever do banco aqui no node

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "turma3" })
export class Turma3Entity {
  @PrimaryColumn()
  uuid!: string;

  @Column({ name: "name" })
  name!: string;

  @Column({ name: "students" })
  students!: number;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "updated_at" })
  updatedAt?: Date;
}
