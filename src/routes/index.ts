import { Request, Response, Router } from "express";

export const router = Router();
router.get("/", (req, res) => {
    res.render("/public/index.html");
});

router.post("/", (req: Request, res: Response) => {
    res.json({ msg: `Resposta foi =  ${req.body.msg}...` })
})

export default router;