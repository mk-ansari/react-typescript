import { useState } from 'react'

const UseState = () => {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<Array<string>>([]);
  const addTodo = () => {
    setTodo([...todo, task]);
    setTask("");
  };

  return (
    <>
      {/* string type */}
      <div className='border p-5 m-5'>
        <h5>Usestate Exa with type array</h5>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary ms-2" onClick={addTodo}>Add Todo</button>
        {todo.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  )
}

export default UseState