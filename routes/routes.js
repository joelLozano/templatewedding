import { Router } from "express";
import controllers from "../controllers/controllers.js";
const router = Router();

router.get('/', controllers.index);
router.get('/geetConfirmation', controllers.geetConfirmation);
router.get('/confirmation', controllers.confirmation);
router.post('/makeConfirmation', controllers.makeConfirmation);    
router.get('/no-confirmation', controllers.noConfirmation);
router.post('/makeNoConfirmation', controllers.makeNoConfirmation);

export default router;