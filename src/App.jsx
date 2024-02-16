import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])



  const handleEdit = () => {

  }
  const handledelete = () => {
    
  }
  const handleAdd = () => {
    settodos([...todos, {todo, isCompleted: false}])
    settodos("")
  }
  const handleChange = (e) => {
    settodos(e.target.value)
  }

  return (
    <>
      <Navbar  />
      <div className="container mx-auto my-5 rounded-xl bg-violet-100 min-h-[80vh]">
        <div className="addtodo my-5">
          <h2 className='text-lg font-bold'>Add Todo</h2>
          <input onChange={handleChange} value={todo} type='text' className='w-2/4' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-black rounded-md mx-6'>Add</button>
        </div>
      
          <h2 className='text-lg font-bold'>My Todos</h2>
          <div className="todos">
            <div className="todo flex">
              <div className="text">{todo}</div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
                <button onClick={handledelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
              </div>

            </div>
          </div>
      </div>
    </>
  )
}

export default App
