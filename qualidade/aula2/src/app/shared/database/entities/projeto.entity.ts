import { GrowdeverEntity } from "./growdever.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("projeto")
export class ProjetoEntity {
    @PrimaryColumn()
    id!: string;

    @Column()
    nome!: string;

    @Column({
        name: "ind_ativo",
    })
    indAtivo!: boolean;

    @Column({
        name: "id_growdever",
    })
    idGrowdever!: string;

    @ManyToOne(() => GrowdeverEntity, {
        eager: true,
    })
    @JoinColumn({
        name: "id_growdever",
    })
    growdever!: GrowdeverEntity;
}
