import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_MYSQL as string,
    process.env.DB_USER as string,
    process.env.DB_PASS as string,
    {
        dialect: 'mysql',
        port: parseInt(process.env.DB_PORT as string)
    }
);