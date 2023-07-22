import fs from "fs";
import { ROLES } from "../utils/Role.js";
const USERS = JSON.parse(fs.readFileSync('./server/db/auth.json'))

export const login = (req, res) => {
      const { body } = req
      res.json({ ok: true, body })
}

export const register = (req, res) => {
      const { body } = req
      try {
            const emailRegister = USERS.find(user => user.email === body.email)

            if (emailRegister) {
                  return res.status(400).json({
                        ok: true,
                        status: 400,
                        body: 'El email ya se encuentra registrado'
                  })
            }
            const newUser = body
            USERS.push(newUser)
            console.log(USERS);
            fs.writeFileSync('./server/db/auth.json', JSON.stringify(USERS), 'utf-8')

            return res.status(201).json({
                  ok: true,
                  status: 201,
                  body: {
                       email: newUser.email,
                       role:ROLES.find(role => role.id === newUser.id)
                  }
            })
      } catch (error) {
            return res.status(error.status).json(error.message);

      }
}