import { Router } from "express";
import * as UserController from '../controllers/UserController';
import { Auth } from '../middlewares/auth';

export const router = Router();

router.get("/list", Auth.private, UserController.list);
router.post("/register", UserController.register);
router.post("/login", UserController.login);

export default router;