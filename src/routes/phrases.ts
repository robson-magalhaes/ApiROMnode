import { Router } from 'express';
import * as apiController from '../controllers/apiController';
const router = Router();

router.post('/phrase', apiController.createPhrases);
router.get('/phrases', apiController.getAllPhrases);
router.get('/phrase/random', apiController.getPhraseRand);
router.get('/phrase/:id', apiController.getPhrase);
router.put('/updatePhrases', apiController.updatePhrase);
router.delete('/phrase/:id', apiController.deletePhrase);

export default router;