import { Request, Response } from "express"
import { Todo } from "../models/TodoModel"

export const getAllTodo = async (req: Request, res: Response) => {
    let list = await Todo.findAll()
    res.json({ list })
}
export const createTodo = async (req: Request, res: Response) => {
    let { title, done } = await Todo.create({
        title: req.body.title,
        done: req.body.done
    })
    res.json({ title, done })
}