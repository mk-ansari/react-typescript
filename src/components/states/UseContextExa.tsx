import { useContext, useState } from 'react'
import { UserContext } from "../../context/UserContext"

const UseContextExa = () => {
    const { user, setUser } = useContext(UserContext);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    const updateState=()=>{
        setUser({ name, email })
        setName("");
        setEmail("");
    }
    return (
        <div className='border p-5 m-5'>
            <h5>Usecontext Exa </h5>
            <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <h1>{`${user?.name} ${user?.email}`}</h1>
            <button className="btn btn-primary" onClick={updateState}>change State</button>
        </div>
    )
}

export default UseContextExa