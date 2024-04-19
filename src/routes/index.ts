import { Request, Response, Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SearchController.search);

router.post('/api', (req:Request, res:Response)=>{
    let data = [];
    let nome = 'Meu nome é '+req.body.nome;
    let idade = 'Tenho '+req.body.idade+' anos de idade.';
    data = [{nome, idade},{nome:'Fulano', idade:22}]
    res.json(data);
});

export default router;