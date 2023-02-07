import { Growdever } from "../models/growdever";
import db from "../db";

export class GrowdeverRepository {
  async getGrowdeverByUid(id: number): Promise<Growdever | undefined> {
    const result = await db.query("SELECT * FROM growdevers WHERE codigo = $1", [id]);

    if (result.rowCount === 0) return undefined;

    return Growdever.create(result.rows[0].nome, result.rows[0].codigo);
  }
}
