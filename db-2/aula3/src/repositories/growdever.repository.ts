import { pgHelper } from "../database/pg-helper";
import { Aula3Entity } from "../database/entities/aula3.entity";

// Active Record
// export class GrowdeverRepository {
//   async getAllGrowdevers(): Promise<Growdever[]> {
//     const growdeversEntities = await GrowdeverEntity.find();

//     return growdeversEntities.map((growdeverEntity) =>
//       Growdever.create(
//         growdeverEntity.id,
//         growdeverEntity.name,
//         growdeverEntity.cpf,
//         growdeverEntity.birth,
//         growdeverEntity.status,
//         growdeverEntity.skills ? growdeverEntity.skills.split(",") : []
//       )
//     );
//   }

//   async createGrowdever(growdever: Growdever): Promise<void> {

//     const growdeverEntity = GrowdeverEntity.create({
//       id: growdever.id,
//       name: growdever.name,
//       birth: growdever.birth,
//       cpf: growdever.cpf,
//       status: growdever.status,
//       skills: growdever.skills.join(),
//     });

//     await growdeverEntity.save();
//   }

//   async getGrowdeverByUid(id: string): Promise<Growdever | undefined> {
//     // const growdeverEntity = await GrowdeverEntity.findBy({ id });

//     const growdeverEntity = await GrowdeverEntity.findOne({
//       where: { id },
//     });

//     if (!growdeverEntity) return undefined;

//     const growdever = Growdever.create(
//       growdeverEntity.id,
//       growdeverEntity.name,
//       growdeverEntity.cpf,
//       growdeverEntity.birth,
//       growdeverEntity.status,
//       growdeverEntity.skills
//         ? (growdeverEntity.skills as string).split(",")
//         : []
//     );

//     return growdever;
//   }

//   async existsGrowdeverByCpf(cpf: string): Promise<boolean> {
//     const growdeverEntity = await GrowdeverEntity.findOneBy({ cpf });
//     return !!growdeverEntity;
//   }

//   async updateGrowdever(growdever: Growdever): Promise<void> {
//     const growdeverEntity = await GrowdeverEntity.findOne({
//       where: { id: growdever.id },
//     });

//     if (!growdeverEntity) throw new Error("Growdever não encontrado");

//     growdeverEntity.name = growdever.name;
//     growdeverEntity.birth = growdever.birth;
//     growdeverEntity.cpf = growdever.cpf;
//     growdeverEntity.status = growdever.status;
//     growdeverEntity.skills = growdever.skills.join();

//     await growdeverEntity.save();
//   }

//   async deleteGrowdever(id: string): Promise<boolean> {
//     const growdeverEntity = await GrowdeverEntity.findOne({
//       where: { id },
//       relations: ["address", "assessments"],
//     });

//     if (!growdeverEntity) throw new Error("Growdever não existe");

//     await growdeverEntity.remove();

//     return true;
//   }
// }

// Data Mapper
export class GrowdeverRepository {
  async createGrowdever(growdever: any): Promise<void> {
    const manager = pgHelper.client.manager;

    let aula3: Aula3Entity;
    aula3 = manager.create(Aula3Entity, {
      description: "123213",
      uuid: new Date().getTime().toString(),
      quantidade: 1100,
    });

    await manager.save(aula3);

    const aula32 = Aula3Entity.create({
      uuid: new Date().getTime().toString(),
      description: "Teste",
      quantidade: 20,
    });

    await aula32.save();

    return;
  }
}
