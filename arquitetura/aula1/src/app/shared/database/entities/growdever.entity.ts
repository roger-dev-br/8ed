import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "growdever4" })
export class GrowdeverEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  nome!: string;

  @Column()
  email!: string;

  @CreateDateColumn({ name: "created_at" })
  cratedAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt?: Date | null;
}
