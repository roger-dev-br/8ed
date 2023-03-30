import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ProjectEntityMigration1668821022543 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "project",
        columns: [
          {
            name: "id",
            type: "varchar",
            length: "36",
            isPrimary: true,
          },
          {
            name: "descricao",
            type: "varchar",
            length: "100",
          },
          {
            name: "tecnologia",
            type: "varchar",
            length: "100",
          },
          {
            name: "ativo",
            type: "varchar",
            length: "1",
          },
          {
            name: "id_growdever",
            type: "character varying",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("project");
  }
}
