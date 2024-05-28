import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import mainRoutes from './routes/index';
import uploadRoutes from './routes/upload';
import phraseRoutes from './routes/phrases';
import todoRoutes from './routes/todo';
import usersRoutes from './routes/users';

dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

// Rotas
server.use(mainRoutes);
server.use(uploadRoutes);
server.use(phraseRoutes);
server.use(todoRoutes);
server.use(usersRoutes);
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});
// Porta
server.listen(process.env.PORT);