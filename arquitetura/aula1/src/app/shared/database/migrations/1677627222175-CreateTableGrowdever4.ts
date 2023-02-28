import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableGrowdever41677627222175 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "growdever4",
        columns: [
          {
            name: "uuid",
            type: "varchar",
            isPrimary: true,
            isNullable: false,
            length: "36",
            primaryKeyConstraintName: "pk_growdever4",
          },
          {
            name: "nome",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            length: "100",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("growdever4", true, true, true);
  }
}
