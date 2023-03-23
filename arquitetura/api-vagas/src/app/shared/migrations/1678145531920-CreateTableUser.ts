import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUser1678145531920 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    { name: 'id', type: 'uuid', isNullable: false, isPrimary: true },

                    { name: 'username', type: 'varchar', isNullable: false, isUnique: true },

                    { name: 'senha', type: 'varchar', isNullable: false },

                    { name: 'nome', type: 'varchar', isNullable: false },

                    { name: 'nome_empresa', type: 'varchar', isNullable: true },

                    { name: 'tipo', type: 'char', isNullable: false },

                    { name: 'created_at', type: 'timestamp' },

                    { name: 'updated_at', type: 'timestamp' },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }
}
