import { sequelize } from "../database/mysql";
import { DataTypes, Model } from "sequelize";

export interface TodoInstance extends Model {
    id: number,
    title: string,
    done: boolean
}
export const Todo = sequelize.define<TodoInstance>("Todo", {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    tableName: "todo",
    timestamps: false
})