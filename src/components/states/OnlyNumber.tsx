import { useContext, useState } from 'react'
import { UserContext } from "../../context/UserContext"


const OnlyNumber = () => {
    const [num, setNum] = useState<number>(0);
    const [str, setStr] = useState<string>('');
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            {/* can type only number */}
            <div className='border p-5 m-5'>
                <h5>Can type only number</h5>
                <input
                    type="text"
                    placeholder="type only number"
                    value={num === 0 ? "" : num}
                    onChange={(e) => setNum(parseFloat(e.target.value))}
                />
                <h5>Can type only string</h5>
                <input
                    type="text"
                    placeholder="type only number"
                    value={str === "" ? "" : str}
                    onChange={(e) => setStr((e.target.value))}
                />
                <div className='border p-5 m-5'>
                 <h5>Use Context Data here</h5>
                 <p>{user?.name}</p>
                 <p>{user?.email}</p>
                 </div>
            </div>
        </>
    )
}

export default OnlyNumber