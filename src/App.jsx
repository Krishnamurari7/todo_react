import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar  />
      <div className="container mx-auto my-5 rounded-xl bg-violet-100 min-h-[80vh]">
        <div className="addtodo my-5">
          <h2 className='text-lg font-bold'>Add Todo</h2>
          <input type='text' className='w-2/4' />
          <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Add</button>
        </div>
      
          <h2 className='text-lg font-bold'>My Todos</h2>
          <div className="todos">
            <div className="todo flex">
              <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, adipisci.</div>
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
