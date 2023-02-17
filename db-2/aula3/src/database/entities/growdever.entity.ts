// Entidade para representar o Growdever do banco aqui no node

import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { AddressEntity } from "./address.entity";
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

  @OneToMany(() => AddressEntity, (fk) => fk.growdever)
  @JoinColumn({ name: "uuid", referencedColumnName: "growdever_uuid" })
  addresses?: AddressEntity[];

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
