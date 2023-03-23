import {
    Entity,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export abstract class EntityBase {
    @PrimaryColumn()
    id!: string;

    @CreateDateColumn('created_at')
    createdAt!: Date;

    @UpdateDateColumn('updated_at')
    updatedAt?: Date;

    @BeforeInsert()
    beforeCreate() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.updatedAt = new Date();
    }
}
