import { useState, useContext } from "react";
import {UserContext} from "../context/UserContext"
 
type EmpData = {
    name: string; salary: number;
}

const empIntialValue = {
    name: "",
    salary: 0,
}

const UseStateExa = () => {
    // use context
    const userData = useContext(UserContext);
console.log(userData.name.fname);

    const [task, setTask] = useState<string>("");
    const [todo, setTodo] = useState<Array<string>>([]);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [age, setAge] = useState<number>(0);

    const [name, setName] = useState<string>("");
    const [salary, setSalary] = useState<number>(0);
    const [employee, setEmployee] = useState<EmpData>(empIntialValue);
    const [num, setNum] = useState<number>(0);

    const addTodo = () => {
        setTodo([...todo, task]);
        setTask("");
    };
    const addDetails = () => {
        setEmployee({ name, salary })
        setName("");
        setSalary(0);
    };

    return (
        <>
            <h1>UseStateExa with all types.</h1>

            {/* string type */}
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
            {todo.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

            {/* boolean type */}
            <h3>isAdmin: {isAdmin.toString()}</h3>
            <button onClick={() => setIsAdmin(!isAdmin)}>Set Admin</button>
            <br />
            <br />

            {/* number type */}
            <input
                type="number"
                placeholder="enter age"
                value={age <= 0 ? "" : age}
                onChange={(e) => setAge(parseInt(e.target.value))}
            />
            <p>{age <= 0 ? "" : age}</p>

            <br />

            {/* object type */}
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
            <p>{employee.name}</p>
            <p>{employee.salary === 0 ? "" : employee.salary}</p>
            <br />
            <input
                type="text"
                placeholder="type only number"
                value={num === 0  ? "" : num}
                onChange={(e) => setNum(parseFloat(e.target.value))}
            />


        </>
    );
};

export default UseStateExa;
