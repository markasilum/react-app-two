import { useEffect, useState } from 'react'
import Post from './components/Post'

function App() {
  const[number, setNumber] = useState(1)
  const[post, setPost] = useState(null)
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/'+number)
    .then((response)=> response.json())
    .then((data)=> setPost(data))
    .catch((error)=>console.log(error))
  },[number])

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      {post && <Post title={post.title} body={post.body}/>}
      {number}
      <div className='flex items-center gap-3 mt-3'>
        {Array.from({length:5}).map((value, index) => {
          return(
            <div key={`pagination-${index+1}`} className='p-4 border font-bold hover:cursor-auto' onClick={()=>setNumber(index+1)}>
              {index+1}
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default App
