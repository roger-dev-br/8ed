import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "profile3" })
export class Profile3Entity extends BaseEntity {
  @PrimaryColumn()
  uuid!: string;

  @Column()
  email!: string;

  @Column()
  birth!: Date;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "updated_at" })
  updatedAt?: Date;
}
