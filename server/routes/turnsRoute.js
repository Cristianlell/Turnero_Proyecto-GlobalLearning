import { Router } from "express";
import { createTurn, deleteTurn, editTurn, getProfessionals } from "../controllers/turnsController.js";

const router = Router()

router
  .get('/professional', getProfessionals)
  .post('/', createTurn)
  .put('/:id/:userId', editTurn)
  .delete('/:id/:userId', deleteTurn)

export default router