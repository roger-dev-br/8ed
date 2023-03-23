import { Response } from 'express';
import { createServer } from '../config/express.config';
import { makeRoutes } from './express.routes';
import { appEnv } from '../../app/envs/app.env';

export const runServer = () => {
    const api = createServer();

    api.get('/', (_, res: Response) => {
        res.send('<h1>Api Vagas</h1>');
    });

    makeRoutes(api);

    api.listen(appEnv.port, () => console.log(`Api is running on port ${appEnv.port}`));
};
