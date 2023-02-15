import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "turma3" })
export class Turma3Entity extends BaseEntity {
  @PrimaryColumn()
  uuid!: string;

  @Column({ name: "name" })
  name!: string;

  @Column({ name: "students" })
  qtyStudents!: number;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "updated_at" })
  updatedAt?: Date;
}
