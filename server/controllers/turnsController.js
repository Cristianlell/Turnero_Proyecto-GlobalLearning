import { PROFESSIONALS, create, turnId, edit, findAndDelete, TURNS } from "../repositories/turnsRepository.js";

export const createTurn = (req, res) => {
      const { body } = req
      try {
            if (!body) {
                  return res.status(400).json({
                        ok: false,
                        status: 400,
                        body: 'Faltan datos'
                  })
            }
            const turn = create(body)
            return res.status(201).json({
                  ok: true,
                  status: 201,
                  turn
            })
      } catch (error) {
            return res.status(error.status).json(error.message);
      }
}

export const editTurn = (req, res) => {
      const { body } = req
      const { id, userId } = req.params
      try {
            const turn = turnId(id, userId)
            if (!body) {
                  return res.status(400).json({
                        ok: false,
                        status: 400,
                        body: 'Faltan datos'
                  })
            }
            if (!turn) {
                  return res.status(404).json({
                        ok: false,
                        status: 404,
                        body: 'Not Found'
                  })
            }
            edit(id, userId, body)

            return res.status(200).json({
                  ok: true,
                  status: 200,
                  message: "Ok"
            })
      } catch (error) {
            return res.status(error.status).json(error.message);
      }
}

export const deleteTurn = (req, res) => {
      const { id, userId } = req.params
      try {
            const turn = turnId(id, userId)
            if (!turn) {
                  return res.status(404).json({
                        ok: false,
                        status: 404,
                        body: 'Not Found'
                  })
            }
            const turnDelete = findAndDelete(id, userId)

            return res.status(201).json({
                  ok: true,
                  status: 201,
                  turnDelete
            })
      } catch (error) {
            return res.status(error.status).json(error.message);
      }
}

export const getProfessionals = (req, res) => {
      try {
            return res.status(200).json({
                  ok: true,
                  status: 200,
                  body: PROFESSIONALS
                  
            })
      } catch (error) {
            return res.status(error.status).json(error.message);
      }
}

export const getSpecialties = (req, res) => {
      try {
            const specialties = PROFESSIONALS.map((professional) => professional.specialty);
            return res.status(200).json({
                  ok: true,
                  status: 200,
                  body: specialties
                  
            })
      } catch (error) {
            return res.status(error.status).json(error.message);
      }
}

export const getTurns = (req, res) => {
      try {
            const turns = TURNS
            return res.status(200).json({
                  ok: true,
                  status: 200,
                  body: turns
                  
            })
      } catch (error) {
            return res.status(error.status).json(error.message);
      }
}