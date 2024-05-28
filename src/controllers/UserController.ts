import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req: Request, res: Response) => {
    if (req.body.email && req.body.password) {
        let { email, password } = req.body;
        let hasUser = await UserModel.findOne({ where: { email } });
        if (!hasUser) {
            let newUser = await UserModel.create({ email, password });
            const token = JWT.sign(
                {id:newUser.id, email:newUser.email},
                process.env.JWT_SECRET_KEY as string,
                {expiresIn: '2h'}
            )
            res.status(201);
            res.json({id:newUser.id, token });
        } else {
            res.json({ error: "Usuario ja existe, tente novamente!!" });
        }

    }
}
export const list = async (req: Request, res: Response) => {
    let list = await UserModel.findAll();
    res.json({ list })
}
export const login = async (req: Request, res: Response) => {
    if (req.body.email && req.body.password) {
        let user = await UserModel.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        });
        if (user) {
            const token = JWT.sign(
                { id: user.id, email: user.email }, //informações do usuario
                process.env.JWT_SECRET_KEY as string, //Chave de acesso
                { expiresIn: '2h' } //Tempo de expiração
            )
            res.json({ status: true, token })
        } else {
            res.json({ status: false })
        }
    }
}