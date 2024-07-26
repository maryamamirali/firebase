import { useState } from "react"
import { Login } from "../../config/firebaseconfig"
import { useNavigate } from "react-router-dom"


export default function SignIn () {

const navigate = useNavigate()
const [email , setEmail] = useState()
const [password , setPassword] = useState()

const signin = async() => {
try{
    await Login(email , password)
    alert('signed in')
    navigate('/')
}
catch(e) {
alert(e.message)
}
}
return <>
<h1>signin</h1>
<input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
    <input placeholder="password" onChange={(e) => setPassword(e.target.value)} />

    <button onClick={() => signin()}>login</button>
</>
}