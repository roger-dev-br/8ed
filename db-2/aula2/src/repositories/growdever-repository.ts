import { Growdever } from "../models/growdever";
import db from "../db";
import { pgHelper } from "../database/pg-helper";

export class GrowdeverRepository {
  // Toda interaçao de Growdever com o DB

  // Consultar um growdever pelo codigo
  async obterGrowdeverPorCodigo(id: number): Promise<Growdever | undefined> {
    const result: Growdever[] = await pgHelper.client.query(`select * from growdevers where codigo = $1`, [id]);

    if (result.length === 0) {
      return undefined;
    }

    return Growdever.create(result[0].nome, result[0].codigo);
  }

  // consultar todos os growdevers
  async obterTodosGrowdevers(): Promise<Growdever[]> {
    const result: Growdever[] = await pgHelper.client.query("select * from growdevers order by nome");

    return result.map((row) => Growdever.create(row.nome, row.codigo));
  }

  async criarGrowdever(growdever: Growdever): Promise<Growdever> {
    const result = await pgHelper.client.query("insert into growdevers (nome) values ($1) returning *", [
      growdever.nome,
    ]);

    return Growdever.create(result[0].nome, result[0].codigo);
  }

  async atualizarGrowdever(growdever: Growdever): Promise<void> {
    await pgHelper.client.query("update growdevers set nome = $1 where codigo = $2", [
      growdever.nome,
      growdever.codigo,
    ]);
  }

  async removerGrowdever(id: number): Promise<void> {
    await db.query("delete from growdevers where codigo = $1", [id]);
  }
}
