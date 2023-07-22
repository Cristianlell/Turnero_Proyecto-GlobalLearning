import fs from "fs";
export const USERS = JSON.parse(fs.readFileSync('./server/db/auth.json'))

export const findUser = (email) =>{
      return USERS.find(user => user.email === email)

}

export const createUser = (user) => {
      USERS.push(user)
      fs.writeFileSync('./server/db/auth.json', JSON.stringify(USERS), 'utf-8')
}