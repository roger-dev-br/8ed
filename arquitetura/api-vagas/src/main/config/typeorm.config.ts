import { DataSource } from 'typeorm';
import { appEnv } from '../../app/envs/app.env';

export default new DataSource({
    type: 'postgres',
    url: appEnv.dbUrl,
    schema: 'api-vagas',
    entities: ['src/app/shared/entities/**/*ts'],
    migrations: ['src/app/shared/migrations/**/*ts'],
    synchronize: false,
    ssl: {
        rejectUnauthorized: false,
    },
});
