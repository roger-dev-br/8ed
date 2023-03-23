import { Column, Entity, OneToMany, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { AvaliacaoEntity } from "./avaliacao.entity";
import { EnderecoEntity } from "./endereco.entity";

@Entity({
    name: "growdever",
})
export class GrowdeverEntity {
    @PrimaryColumn()
    id!: string;

    @Column({
        length: 60,
    })
    nome!: string;

    @Column()
    cpf!: number;

    @Column()
    idade!: number;

    @Column({
        nullable: true,
    })
    skills!: string;

    @OneToMany(() => AvaliacaoEntity, (avaliacao) => avaliacao.growdever)
    avaliacoes!: AvaliacaoEntity[];

    @OneToOne(() => EnderecoEntity, {
        eager: true,
        nullable: true,
    })
    @JoinColumn({ name: "id_endereco" })
    endereco!: EnderecoEntity;

    @Column({ name: "id_endereco", nullable: true })
    id_endereco!: number;
}
