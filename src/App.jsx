import { useState } from 'react'
import Post from './components/Post'

function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <Post />
      <div className='flex items-center gap-3 mt-3'>
        {Array.from({length:5}).map((value, index) => {
          return(
            <div className='p-4 border font-bold hover:cursor-auto' >
              {index}
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default App
