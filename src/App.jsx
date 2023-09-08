import { useState ,useEffect} from 'react'

import reactLogo from './assets/react.svg'
import { puppyList } from './data'
import './App.css'


function App() {
  const [puppies,setPuppies] = useState(puppyList);
  const [featPupId,setFeatPupId] = useState(null);
 

  const clickHandler = (puppyId) =>{
     setFeatPupId(puppyId);
  }

  
  

  const featuredPup = puppies.find((pup)=> pup.id === featPupId);

  
  return (
    <>
      <div>
      {featPupId && (
       <div className='container card'>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age:{featuredPup.age}</li>
          <li>Email:{featuredPup.email}</li>
        </ul>
        </div>
        )}
        {
          puppies.map((puppy)=>{
            return <div>
              <p
               className='container'
               onClick={()=>clickHandler(puppy.id)} 
               key={puppy.id}
               >
                {puppy.name}
                </p>
                
            </div>
          })
        }
       
       
       
       
      </div>
      
    </>
  )
}

export default App
