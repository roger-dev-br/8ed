import { Turma3Entity } from "../database/entities/turma.entity";
import { pgHelper } from "../database/pg-helper";

export class Turma3Repository {
  async create(name: string, students: number): Promise<Turma3Entity> {
    const novaTurma = Turma3Entity.create({
      uuid: new Date().getTime().toString(),
      name,
      qtyStudents: students,
      createdAt: new Date(),
    });

    return novaTurma.save();
  }

  async getByUUID(uuid: string): Promise<Turma3Entity | null> {
    const turma = Turma3Entity.findOne({
      where: {
        uuid,
      },
    });

    return turma;
  }

  async getAll(): Promise<Turma3Entity[]> {
    const turmas = Turma3Entity.find();

    return turmas;
  }

  async update(uuid: string, name: string, students: number): Promise<void> {
    const turma = await this.getByUUID(uuid);

    if (!turma) {
      return;
    }

    turma.name = name;
    turma.qtyStudents = students;
    turma.updatedAt = new Date();

    await turma.save();
  }
}
