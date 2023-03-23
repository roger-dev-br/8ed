import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1668820170473 implements MigrationInterface {
  name = "FirstMigration1668820170473";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "endereco" ("id" SERIAL NOT NULL, "rua" character varying NOT NULL, "cidade" character varying NOT NULL, "uf" character varying NOT NULL, "complemento" character varying, "created_at" TIMESTAMP NOT NULL , "updated_at" TIMESTAMP NOT NULL , CONSTRAINT "PK_2a6880f71a7f8d1c677bb2a32a8" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "growdever" ("id" character varying NOT NULL, "nome" character varying(60) NOT NULL, "cpf" integer NOT NULL, "idade" integer NOT NULL, "skills" character varying, "id_endereco" integer NOT NULL, CONSTRAINT "REL_a65e6314134b1eefafdad82229" UNIQUE ("id_endereco"), CONSTRAINT "PK_e4de93ef840d0194b464e76b34b" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "avaliacao" ("id" character varying NOT NULL, "modulo" character varying NOT NULL, "nota" integer NOT NULL, "id_growdever" character varying NOT NULL, CONSTRAINT "PK_fd3e156019eb4b68c6c9f746d51" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "avaliacao"`);
    await queryRunner.query(`DROP TABLE "growdever"`);
    await queryRunner.query(`DROP TABLE "endereco"`);
  }
}
