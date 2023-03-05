import './App.css';
import {useState} from "react";
import Button from './Components/Button';
import Input from './Components/Input';

import * as math from "mathjs";

const App = () => 
{
  const [text,setText] = useState("");
  const [result,setResult] = useState("");
 
  const addToText = (val) =>
  {
    setText((text) => [...text,val+" "]);
  };

  const calculateResult = () =>
  {
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  const resetInput = () => 
  {
    setText("");
    setResult("");
  };

  const buttoncolor = "#f2a33c";
  const buttonclrcolor = "#f54842";
  return (
    <div className="App">
      <div className="calci_wrapper">
        <Input text={text} result={result}/>
        <div className="row">
              <Button symbol="7" handleClick={addToText}/>
              <Button symbol="8" handleClick={addToText}/>
              <Button symbol="9"handleClick={addToText}/>
              <Button symbol="/" color={buttoncolor} handleClick={addToText}/>
        </div>
        <div className="row">
              <Button symbol="4" handleClick={addToText}/>
              <Button symbol="5" handleClick={addToText}/>
              <Button symbol="6" handleClick={addToText}/>
              <Button symbol="*" color={buttoncolor} handleClick={addToText}/>
        </div>
        <div className="row">
              <Button symbol="1" handleClick={addToText}/>
              <Button symbol="2" handleClick={addToText}/>
              <Button symbol="3" handleClick={addToText}/>
              <Button symbol="+" color={buttoncolor} handleClick={addToText}/>
        </div>
        <div className="row">
              <Button symbol="0" handleClick={addToText}/>
              <Button symbol="." handleClick={addToText}/>
              <Button symbol="=" handleClick={calculateResult}/>
              <Button symbol="-" color={buttoncolor} handleClick={addToText}/>
        </div>
         <Button symbol="clear" color={buttonclrcolor} handleClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
