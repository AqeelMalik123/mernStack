import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [joke, setJoke] = useState([])
  useEffect(()=>{
   fetch('http://localhost:3000/joke')  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })  .then((data) => {
    setJoke(data);
    // setLoading(false);
  }).catch((error)=>{
     console.log(error)
   })
  },[])
  return (
   <>
   Full stack application
{
  joke.map((item,index)=>{
    return(
    <div key={item.id}>
      <h2>{item?.title}</h2>
      <p>{item?.content}</p>
    </div>)
  })
}
   </>
  )
}

export default App
