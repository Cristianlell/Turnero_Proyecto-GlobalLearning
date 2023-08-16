import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

export const USERS = JSON.parse(fs.readFileSync('./server/db/auth.json'))

export const findUser = (email) =>{

      return USERS.find(user => user.email === email)

}

export const createUser = (user) => {
      user.id = uuidv4()
      USERS.push(user)
      fs.writeFileSync('./server/db/auth.json', JSON.stringify(USERS), 'utf-8')
}