import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Growdever3Entity } from "./growdever.entity";

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

  @ManyToOne(() => Growdever3Entity, (fk) => fk.addresses)
  @JoinColumn({ name: "growdever_uuid", referencedColumnName: "uuid" })
  growdever!: Growdever3Entity;
}
