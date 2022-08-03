import {useState} from 'react'

const BooleanTypeExa = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <>
      {/* boolean type */}
      <div className='border p-5 m-5'>
        <h5>Usestate Exa with type boolean</h5>
        <h5>isAdmin: {isAdmin.toString()}</h5>
        <button className="btn btn-primary ms-2" onClick={() => setIsAdmin(!isAdmin)}>Set Admin</button>
      </div>
    </>
  )
}

export default BooleanTypeExa