import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql";

export interface UserInstance extends Model {
    id: number,
    email: string,
    password: string
}

export const UserModel = sequelize.define<UserInstance>('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
},
    {
        tableName: 'users',
        timestamps: false
    })