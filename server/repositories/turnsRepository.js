import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

export const TURNS = JSON.parse(fs.readFileSync('./server/db/turns.json'))
export const PROFESSIONALS = JSON.parse(fs.readFileSync('./server/db/professional.json'))

export const create = (turn) => {
      turn.id = uuidv4()
      TURNS.push(turn)
      const professionals = [...PROFESSIONALS]
      const [professionalFilterId] = PROFESSIONALS.filter(professional => professional.id === turn.professionalId)
      professionalFilterId.hour = professionalFilterId.hour.filter(hour => hour !== turn.hour)
      professionals.map(professional => {
            if (professional.id === turn.professionalId) {
                  professional.hour = professionalFilterId.hour
            }
      })
      fs.writeFileSync('./server/db/turns.json', JSON.stringify(TURNS), 'utf-8')
      fs.writeFileSync('./server/db/professional.json', JSON.stringify(professionals), 'utf-8')
      return turn
}

export const edit = (id, userId, turn) => {
      const professionals = [...PROFESSIONALS]
      let turns = [...TURNS]
      let turnFilter = turnId(id, userId)
      turnFilter = { ...turnFilter, ...turn }
      turns = turns.map(turn => {
            if (turn.id === id && turn.affiliateNumber === userId) {
                  turn = turnFilter
            }
            return turn
      })
      const [professionalFilterId] = PROFESSIONALS.filter(professional => professional.id === turn.professionalId)
      professionalFilterId.hour = professionalFilterId.hour.filter(hour => hour !== turn.hour)
      PROFESSIONALS.map(professional => {
            if (professional.id === turn.professionalId) {
                  professional.hour = professionalFilterId.hour
            }
      })
      fs.writeFileSync('./server/db/turns.json', JSON.stringify(turns), 'utf-8')
      fs.writeFileSync('./server/db/professional.json', JSON.stringify(professionals), 'utf-8')
}

export const turnId = (id, userId) => {
      const [turn] = TURNS.filter(turn => turn.id === id && turn.affiliateNumber === userId)
      return turn
}

export const findAndDelete = (id, userId) => {
      const turns = TURNS.filter(turn => turn.id !== id && turn.affiliateNumber === userId)
      fs.writeFileSync('./server/db/turns.json', JSON.stringify(turns), 'utf-8')
}

export const turns = ()=>{
      return TURNS;
}