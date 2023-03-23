import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EntityBase } from './entity.base';
import { UserEntity } from './user.entity';
import { Recrutador } from '../../models/recrutador.model';

@Entity('vaga')
export class vagaEntity extends EntityBase {
    @Column()
    descricao!: string;
    @Column({ name: 'nome_empresa' })
    nomeEmpresa!: string;
    @Column({ name: 'dt_limite' })
    dtLimite!: Date;
    @Column()
    ativo!: boolean;

    @Column({
        name: 'id_recrutador',
    })
    idRecrutador!: string;
    @Column({
        name: 'max_candidatos',
    })
    maxCandidatos!: number;

    @ManyToOne(() => UserEntity, { eager: true })
    @JoinColumn({ name: 'id_recrutador' })
    recrutador!: Recrutador;
}
