import { Request, Response } from "express";
import { Phrase } from "../models/PhrasesModel";
import { Sequelize } from "sequelize";

export const createPhrases = async (req: Request, res: Response) => {
    let { author, txt } = await Phrase.create(req.body);
    res.status(201);
    res.json({ author, txt })
}
export const getPhrase = async (req: Request, res: Response) => {
    let phrase = await Phrase.findByPk(req.params.id)
    if (phrase) {
        res.json({ phrase });
    } else {
        res.json({ error: "Frase não encontrada!!" })
    }
}
export const getPhraseRand = async (req: Request, res: Response) => {
    let phrase = await Phrase.findOne({
        order: [
            Sequelize.fn('RAND')
        ]
    });
    if (phrase) {
        res.json({ phrase })
    } else {
        res.json({ error: "Nenhuma frase foi encontrada!!" })
    }
}

export const getAllPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll();
    res.json({ data: list })
}

export const updatePhrase = async (req: Request, res: Response) => {
    let id = req.body.id;
    let result = await Phrase.update(
        {
            author: req.body.author,
            txt: req.body.txt
        },
        {
            where: { id }
        }
    );
    if (result) {
        res.json({ data: req.body })
    } else {
        res.json({ error: "Id nao encontrado!!" })
    }
}
export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let result = await Phrase.destroy({ where: { id } })
    if (result) {
        res.json({ Resultado: `A frase com Id = ${id}, foi removido.` })
    } else {
        res.json({ error: "Id nao encontrado!!" })
    }
}