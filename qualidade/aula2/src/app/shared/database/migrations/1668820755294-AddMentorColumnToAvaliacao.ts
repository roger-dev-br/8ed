import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMentorColumnToAvaliacao1668820755294 implements MigrationInterface {
    name = 'AddMentorColumnToAvaliacao1668820755294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aula"."avaliacao" ADD "mentor" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "aula"."avaliacao" DROP COLUMN "mentor"`);
    }

}
