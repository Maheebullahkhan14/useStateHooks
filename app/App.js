import React, { useState } from "react";

function App(){
  
  const [increm , setincrement] = useState(0)



  const increment = () =>{
    setincrement(increm+1)
  }

  const Decrement = () =>{
    if(increm > 0){
      setincrement(increm-1)
    }
    else{
      alert('sorry negative appears')
    }
  }

  return(
    <>
      <div className="Main_Container">
        <div className="card">
          <h1>{increm}</h1>
          <div className="Buttons">
            <button className="increm" onClick={increment}>Increm</button>
            <button className="decrem" onClick={Decrement}>Decrem</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;