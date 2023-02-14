import { BaseEntity, BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "aula3" })
export class Aula3Entity extends BaseEntity {
  @PrimaryColumn()
  uuid!: string;

  @Column({
    name: "descricao",
  })
  description!: string;

  @Column()
  quantidade!: number;

  @Column({
    name: "criadoem",
  })
  criadoEm!: Date;

  @BeforeInsert()
  beforeInsert() {
    this.criadoEm = new Date();
  }
}
