import { useState } from 'react'
import '../App.css'

export const Login = () => {
  const [login, setLogin] = useState("false")

    return (
    <div className="container login">
        
            <form id="form_login">
                <div>
                    <h1 >LOGIN</h1>
                    <label htmlFor="txtusu"><strong>Username</strong></label>
                    <input type="text" id="txtusu"  className="form-control"  required/>
                </div>
                <div>
                    <label htmlFor="txtpas"><strong>Password</strong></label>
                    <input type="password" id="txtpas"  className="form-control"  required/>
                </div><br/>
                <input type="submit"  className="btn btn-primary" value="Login"/>
            </form>

        </div>
  )
}
