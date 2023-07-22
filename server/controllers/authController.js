import fs from "fs";
import { ROLES } from "../utils/Role.js";
import { USERS, createUser, findUser } from "../repositories/authRepository.js";

export const login = (req, res) => {
      const { body } = req
      const user = findUser(body.email)

      if (!user) {
            return res.status(404).json({
                  ok: false,
                  status: 404,
                  body: 'El email no se encuentra registrado'
            })
      }
      if (user.password !== body.password) {
            return res.status(400).json({
                  ok: false,
                  status: 400,
                  body: 'Credenciales incorrectas'
            })
      }
      return res.status(200).json({
            ok: true,
            status: 200,
            body: {
                  email: user.email,
                  message: 'logged in'
            }
      })


}

export const register = (req, res) => {
      const { body } = req
      try {
            const emailRegister = findUser(body.email)

            if (emailRegister) {
                  return res.status(400).json({
                        ok: false,
                        status: 400,
                        body: 'El email ya se encuentra registrado'
                  })
            }
            const newUser = body
            createUser(newUser)

            return res.status(201).json({
                  ok: true,
                  status: 201,
                  body: {
                        email: newUser.email,
                        role: ROLES.find(role => role.id === newUser.id)
                  }
            })
      } catch (error) {
            return res.status(error.status).json(error.message);

      }
}