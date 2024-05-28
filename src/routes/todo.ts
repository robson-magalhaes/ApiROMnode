import { Request, Response, Router } from "express";
import * as TodoController from '../controllers/todoController'
const router = Router();

router.get("/todo", TodoController.getAllTodo);
router.post("/todo", TodoController.createTodo);


export default router;