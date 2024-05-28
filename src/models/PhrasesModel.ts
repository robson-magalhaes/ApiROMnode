import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/mysql";

export interface PhraseInstance extends Model {
    id: number;
    author: string;
    txt: string;
}

export const Phrase = sequelize.define<PhraseInstance>('Phrase', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    author: {
        type: DataTypes.STRING
    },
    txt: {
        type: DataTypes.STRING
    }
}, {
    tableName: "phrases",
    timestamps: false
})