import { useState } from 'react'


const ObjectTypeExa = () => {
    type EmpData = {
        name: string; salary: number;
    }
    const empIntialValue = {
        name: "",
        salary: 0,
    }
    const [employee, setEmployee] = useState<EmpData>(empIntialValue);
    const [name, setName] = useState<string>("");
    const [salary, setSalary] = useState<number>(0);
    const addDetails = () => {
        setEmployee({ name, salary })
        setName("");
        setSalary(0);
    };
    return (
        <>
            {/* boolean type */}
            <div className='border p-5 m-5'>
                <h5>Usestate Exa with type Object</h5>
                <input
                    type="text"
                    placeholder="enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="enter salary"
                    value={salary === 0 ? "" : salary}
                    onChange={(e) => setSalary(parseInt(e.target.value))}
                />
                <button onClick={addDetails}>Add Employee</button>
                <p> {employee.name === "" ? "" : `Name: ${employee.name}`}</p>
                <p> {employee.salary === 0 ? "" : `Salary: ${employee.salary}`}</p>
            </div>
        </>
    )
}

export default ObjectTypeExa