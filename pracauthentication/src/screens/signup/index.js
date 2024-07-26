import { useState } from "react"
import { Register } from "../../config/firebaseconfig"
import { useNavigate } from "react-router-dom"


export default function SignUp () {

const navigate = useNavigate()
const [email , setEmail] = useState()
const [password , setPassword] = useState()
const signup = async() => {
try{
await Register(email , password)
alert("successfully signed up")
navigate('/signin')
}
catch(e) {
alert(e.message)
}
}

    return <>
    <h1>signup</h1>
    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
    <input placeholder="password" onChange={(e) => setPassword(e.target.value)} />

    <button onClick={() => signup()}>register</button>
    </>
    }