import './rate.css';
import { useState } from 'react';
export default function Rate({setSubmit,rate,setRate}) {
  let buttons = [1, 2, 3, 4, 5];


  return (
    <div className="rate_container">
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='btn_container'> 
      {buttons.map((btn,index) => (
        <button key={index} className="rate" onClick={()=>setRate(btn)} style={rate==btn?{backgroundColor:"#FC7614"}:{}} >{btn}</button>

      ))}
      </div>
      <button onClick={()=>{rate && setSubmit(true)} }className='submit'>Submit</button>
    </div>
  );
}
