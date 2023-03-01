import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "growdever4" })
export class GrowdeverEntity {
  @PrimaryColumn()
  uuid!: string;

  @Column()
  nome!: string;

  @Column()
  email!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt?: Date | null;

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date();
  }
}
