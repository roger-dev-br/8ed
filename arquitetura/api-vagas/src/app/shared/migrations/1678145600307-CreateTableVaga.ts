import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableVaga1678145600307 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'vaga',
                columns: [
                    { name: 'id', type: 'uuid', isNullable: false, isPrimary: true },

                    { name: 'descricao', type: 'varchar', isNullable: false },

                    { name: 'nome_empresa', type: 'varchar', isNullable: false },

                    { name: 'dt_limite', type: 'timestamp', isNullable: false },

                    { name: 'ativo', type: 'boolean', isNullable: true },

                    { name: 'id_recrutador', type: 'uuid', isNullable: false },

                    { name: 'max_candidatos', type: 'integer', isNullable: false },

                    { name: 'created_at', type: 'timestamp' },

                    { name: 'updated_at', type: 'timestamp' },
                ],
                foreignKeys: [
                    {
                        name: 'vaga_user_fk',
                        columnNames: ['id_recrutador'],
                        referencedTableName: 'user',
                        referencedColumnNames: ['id'],
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vaga');
    }
}
