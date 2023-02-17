import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "address3" })
export class AddressEntity extends BaseEntity {
  @PrimaryColumn()
  uuid!: string;

  @Column({ name: "growdever_uuid" })
  growdeverUUID!: string;

  @Column({ name: "street" })
  street!: string;

  @Column({ name: "city" })
  city!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt?: Date;
}
