import React from 'react'
import { useState } from 'react'
import {X} from 'lucide-react'

const App = () => {
  const [notes, setNotes] = useState('')
  const [description, setDescription] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault(e)
    const copyTask = [...task];
    copyTask.push({notes, description})
      setTask(copyTask)
    // notes and discription ko console me print karne ke baad, hum unko task array me add karenge.
    setNotes('')
    setDescription('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
   

  }

  return (
    <div className='h-screen lg:flex  bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2 gap-4 flex-col items-start  p-5  '>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        
    { /* PEHLA INPUT FOR HEADING */ }
      <input 
        type="text" 
        placeholder='Enter Task Heading' 
        className='px-5  w-full py-2 border-2 outline-none rounded'
        value={notes}
        onChange={(e) =>{ 
          setNotes(e.target.value)

        }}
      />

      {/* DOOSRA INPUT FOR DESCRIPTION */}
        <textarea
        type="text"
        placeholder='Enter Task Description' 
        className='px-5 w-full h-32  py-2 border-2 outline-none rounded'
        value={description}
        onChange={(e) => { setDescription(e.target.value) }}
      />
        <button className='bg-white text-black  w-full px-5 py-2  active:bg-gray-300 outline-none  rounded'>Add Notes</button>
        

      </form>
      <div className=" lg:w-1/2 gap-4 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex gap-5 flex-wrap items-start justify-start mt-5  h-[90%] overflow-auto ">
          {task.map(function(elem,idx){

            return <div key={idx}  className = "flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-2xl text-black  py-9 pb-5 px-7 bg-[url('https://png.pngtree.com/png-vector/20230909/ourmid/pngtree-yellow-notepad-ruled-png-image_9222640.png')]" >
              <div>
                <h3 className="leading-tight text-xl font-bold">{elem.notes}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.description}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="w-full cursor-pointer active:scale-95 py-1 text-xs bg-red-600 rounded font-bold text-white">Delete</button>
              
            </div>
          })}
          
          
          
        </div>
        
          
      </div>
      
    </div>
  )
}

export default App
