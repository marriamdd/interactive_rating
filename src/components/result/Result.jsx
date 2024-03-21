

import "./result.css";
export default function Result({ rate }) {
  return (
    <div className="result_container">
      
  
        <img src="/assets/thanks.svg" alt="thanks" />
     <p className="title">You selected {rate} out of 5</p>
      <h2>Thank you!</h2>
      <p className="content">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  );
}
