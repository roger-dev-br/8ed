// Entidade para representar o Growdever do banco aqui no node

import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Profile3Entity } from "./profile.entity";

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

  @OneToOne(() => Profile3Entity)
  @JoinColumn({ name: "uuid", referencedColumnName: "uuid" })
  profile?: Profile3Entity;

  @BeforeInsert()
  beforeInsert() {
    this.uuid = new Date().getTime().toString();
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    console.log("Vai Atualizar");
    this.updatedAt = new Date();
  }
}
