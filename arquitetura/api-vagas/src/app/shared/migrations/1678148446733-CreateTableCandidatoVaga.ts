import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableCandidatoVaga1678148446733 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'candidato_vaga',
                columns: [
                    { name: 'id', type: 'uuid', isNullable: false, isPrimary: true },

                    { name: 'id_usuario', type: 'uuid', isNullable: false },

                    { name: 'id_vaga', type: 'uuid', isNullable: false },

                    { name: 'ind_sucesso', type: 'boolean', isNullable: true },

                    { name: 'created_at', type: 'timestamp' },

                    { name: 'updated_at', type: 'timestamp' },
                ],
                foreignKeys: [
                    {
                        name: 'candidato_vaga_user_fk',
                        columnNames: ['id_usuario'],
                        referencedTableName: 'user',
                        referencedColumnNames: ['id'],
                    },
                    {
                        name: 'candidato_vaga_vaga_fk',
                        columnNames: ['id_vaga'],
                        referencedTableName: 'vaga',
                        referencedColumnNames: ['id'],
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('candidato_vaga');
    }
}
