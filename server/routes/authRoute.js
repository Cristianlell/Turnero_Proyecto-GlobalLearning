import { Router } from "express";
import { login, register } from "../controllers/authController.js";

const router = Router()

router
      .post('/login',login)
      .post('/register',register)
    
export default router