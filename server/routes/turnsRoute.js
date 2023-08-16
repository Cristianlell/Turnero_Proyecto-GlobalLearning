import { Router } from "express";
import { createTurn, deleteTurn, editTurn, getProfessionals, getSpecialties, getTurns } from "../controllers/turnsController.js";

const router = Router()

router
  .get('/professional', getProfessionals)
  .get('/specialties', getSpecialties)
  .post('/', createTurn)
  .put('/:id/:userId', editTurn)
  .delete('/:id/:userId', deleteTurn)
  .get('/getTurns',getTurns)
export default router