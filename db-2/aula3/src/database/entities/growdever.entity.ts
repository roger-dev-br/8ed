// Entidade para representar o Growdever do banco aqui no node

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "growdever3" })
export class Growdever3Entity {
  @PrimaryColumn()
  uuid!: string;

  @Column({ name: "name" })
  name!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "updated_at" })
  updatedAt?: Date;
}
