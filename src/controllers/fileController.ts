import { Request, Response } from "express";
import { unlink } from "fs/promises";
import sharp from "sharp";

export const uploadFile = async (req: Request, res: Response) => {
    let file = req.file;
    console.log(file);
    if (req.file) {
        await sharp(req.file.path)
            .resize(500)
            .toFormat('jpg')
            .toFile(`./public/media/${req.file.filename}.jpg`);
        res.json({ file: req.file })
        await unlink(req.file.path)
    }else{
        res.status(404).json({error:'arquivo invalido!!'})
    }
}