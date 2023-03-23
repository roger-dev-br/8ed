import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CreateTable1677803957819 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("aluno", [
      new TableColumn({
        name: "tipo",
        type: "varchar",
      }),
      new TableColumn({
        name: "senha",
        type: "varchar",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
