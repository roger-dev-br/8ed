import { GrowdeverEntity } from "./growdever.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("project")
export class ProjectEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  descricao!: string;

  @Column()
  tecnologia!: string;

  @Column()
  ativo!: string;

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
