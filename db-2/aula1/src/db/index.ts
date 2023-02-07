import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgres://xdjcbxnw:pOKyMMHORCfBXdfztNYr1G_xg4Huy473@babar.db.elephantsql.com/xdjcbxnw",
});

export default {
  query: async (sql: string, params?: any[]) => {
    const client = await pool.connect();
    const result = await pool.query(sql, params);
    client.release();
    return result;
  },
};
