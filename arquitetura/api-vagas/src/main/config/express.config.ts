import express from 'express';
import cors from 'cors';

export const createServer = () => {
    const api = express();
    api.use(express.json());
    api.use(cors());
    return api;
};
