import './rate.css'
export default function Rate() {
    let buttons=[1,2,3,4,5]
  return (
    <div className="rate_container">
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      {buttons.map((btn)=>(<buttons>{btn}</buttons>))}
    </div>
  );
}
