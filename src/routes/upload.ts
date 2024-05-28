import { Request, Response, Router } from "express";
import * as fileController from '../controllers/fileController';
import multer from "multer";

const router = Router();

const upload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        console.log(file);
        const allowed: string[] = ['image/png', 'image/jpeg', 'image/jpg'];
        cb(null, allowed.includes(file.mimetype));
    },
    limits: {fieldSize: 8000000 } //Tamanho em Bytes 8000000Bytes = 2Mbs
});

router.post('/upload', upload.single('avatar'), fileController.uploadFile)

export default router;