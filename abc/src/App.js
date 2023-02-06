import React from 'react';
import Box from './Box'

let a =[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]; 

function fun(val,i) {
    return (
      <div>
          <Box name={i}/>
      </div>
    )
  }


function App() {
  return (
    <div>
        {a.map(fun)}
    </div>
  )
}

export default App;
