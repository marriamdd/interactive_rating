import { useState } from "react";
import Rate from "./components/Rate/Rate";
import "./App.css";
import Result from "./components/result/Result";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate,setRate]=useState(null)
  return <>{submit == true ? <Result rate={rate} /> : <Rate setSubmit={setSubmit}  rate={rate} setRate={setRate} />}</>;
}

export default App;

