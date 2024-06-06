

import { useState } from "react";
import { dataTwo } from "./data";
import {data} from "./data";
import './App.css';

function App() {

const [planet, setPlanet] = useState(data);

const removePlanet = (id) => {
  let newPlanet = planet.filter(sun => sun.id !== id); 
 setPlanet(newPlanet)
}



const [facts, setFacts] = useState(0);
  const {id, nameTwo, fact, imageTwo} = dataTwo[facts];

  const previousPerson = () => {
    setFacts (( facts => {
      facts --;
     if (facts < 0) {
       return data.length -1;
     }
     return facts;
    }))
 }

 const nextPerson = () => {
   setFacts ((facts => {
    facts ++;
     if (facts> data.length -1) {
      facts = 0;
     }
     return facts;
   }))
 }





  return (<div>
    <div className='main'>
      <h1>Solar system {planet.lenth}</h1>
      </div>
      
      {planet.map ((thing => {
        const {id, name, description, information, image } = thing;


        return (
          <div key={id}> 
            
            <div className="container">
              <h2 className="planet">{name}</h2>
            </div>

        

            <div className="container">
              <img className="pic" src= {image} alt="planets" width="500px"/>
            </div>


            <div className="container">
            <h3 className="planetOne">{description}</h3>
            </div>

            <div className="container">
            <p className="planetTwo"> {information}</p>
            </div>



          
            <div className='container'>
<button className="btn"onClick={() => removePlanet(id)}> Remove Planet</button>
</div>

          </div>
        )
      }))}
<div className='container'>
<button className="btn"onClick={() => setPlanet ([])}> Delete All Planets</button>
</div>


     <div className="mainOne" key={id}> 
       
     <div className='box'>
      <h2 className="fact"> Facts about Planets</h2>
      </div>
       
      <div className='container'>  
         <h2 className="factOne"> {nameTwo}</h2>
      </div>
    
      <div className='par'>
      <button  className="btnOne"onClick={previousPerson} >Previous</button>
          <img className="picture" src={imageTwo}  alt="fact"/>
      <button className="btnOne" onClick={nextPerson}> Next</button>
       </div>

      <div className='container bottom'>  
         <p className="factTwo"> {fact} </p>
      </div>
      
 

    </div>
  

 </div>
  );
  
}


export default App;
