import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgres://xdjcbxnw:pOKyMMHORCfBXdfztNYr1G_xg4Huy473@babar.db.elephantsql.com/xdjcbxnw",
});

// Uma forma de rodar comandos nesta conexão
export default {
  query: async (sql: string, params?: any[]) => {
    // Conecta no servidor de Banco de Dados
    const client = await pool.connect();

    // Roda o comando e recebe um resulado
    const result = await pool.query(sql, params);

    // Libera a conexão
    client.release();

    // retorna o resultado para quem chamou
    return result;
  },
};
