import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { GrowdeverEntity } from "./growdever.entity";

@Entity({
    name: "avaliacao",
})
export class AvaliacaoEntity {
    @PrimaryColumn()
    id!: string;

    @Column()
    modulo!: string;

    @Column()
    nota!: number;

    @Column({
        nullable: true,
    })
    mentor?: string;

    @ManyToOne(() => GrowdeverEntity)
    @JoinColumn({
        name: "id_growdever",
    })
    growdever!: GrowdeverEntity;

    @Column({
        name: "id_growdever",
    })
    id_growdever!: string;
}
