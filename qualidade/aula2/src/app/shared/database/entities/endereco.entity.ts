import {
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "endereco" })
export class EnderecoEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    rua!: string;

    @Column()
    cidade!: string;

    @Column()
    uf!: string;

    @Column({
        nullable: true,
    })
    complemento!: string;

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt!: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt!: Date;
}
