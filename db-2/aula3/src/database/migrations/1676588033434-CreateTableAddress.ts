import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from "typeorm";

export class CreateTableAddress1676588033434 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address3",
        columns: [
          {
            name: "uuid",
            type: "varchar",
            isPrimary: true,
            isNullable: false,
            length: "36",
          },
          {
            name: "growdever_uuid",
            type: "varchar",
            length: "36",
            isNullable: false,
          },
          {
            name: "street",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "city",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            isNullable: false,
            // default: 'current_timestamp'
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
            // default: 'current_timestamp'
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            name: "fk_address_growdever",
            columnNames: ["growdever_uuid"],
            referencedColumnNames: ["uuid"],
            referencedTableName: "growdever3",
            onDelete: "CASCADE",
          }),
        ],
      })
    );

    await queryRunner.createIndex(
      "address3",
      new TableIndex({
        name: "idx_address_city",
        columnNames: ["city"],
        isUnique: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("address3", true, true, true);
  }
}
