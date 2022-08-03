import { useState } from 'react'

const NumberTypeExa = () => {

    const [age, setAge] = useState<number>(0);
    return (
        <>
            {/* number type */}
            <div className='border p-5 m-5'>
                <h5>Usestate Exa with type Number</h5>
                <input
                    type="number"
                    placeholder="enter age"
                    value={age <= 0 ? "" : age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                />
                <p>{age <= 0 ? "" : age}</p>
            </div>

        </>
    )
}

export default NumberTypeExa