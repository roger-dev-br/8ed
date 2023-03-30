import { DataSource } from "typeorm";
import "dotenv/config";
import { FirstMigration1668820170473 } from "../../app/shared/database/migrations/1668820170473-FirstMigration";
import { AddMentorColumnToAvaliacao1668820755294 } from "../../app/shared/database/migrations/1668820755294-AddMentorColumnToAvaliacao";
import { ProjectEntityMigration1668821022543 } from "../../app/shared/database/migrations/1668821022543-ProjectEntityMigration";
import { GrowdeverEntity } from "../../app/shared/database/entities/growdever.entity";
import { ProjectEntity } from "../../app/shared/database/entities/project.entity";
import { AvaliacaoEntity } from "../../app/shared/database/entities/avaliacao.entity";
import { EnderecoEntity } from "../../app/shared/database/entities/endereco.entity";

const entities = [GrowdeverEntity, ProjectEntity, AvaliacaoEntity, EnderecoEntity];

let dataSource = new DataSource({
  type: "postgres",
  url: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,
  entities: [...entities],
  migrations: [
    FirstMigration1668820170473,
    AddMentorColumnToAvaliacao1668820755294,
    ProjectEntityMigration1668821022543,
  ],
  schema: "public",
});

if (process.env.NODE_ENV === "test") {
  dataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite3",
    synchronize: false,
    entities: [...entities],
    migrations: [
      FirstMigration1668820170473,
      AddMentorColumnToAvaliacao1668820755294,
      ProjectEntityMigration1668821022543,
    ],
  });
}

export default dataSource;
