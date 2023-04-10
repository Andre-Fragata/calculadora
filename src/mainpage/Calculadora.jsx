import React, { useState } from "react";
import Calculator from './Calculadora.module.css'

function Calculadora() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className={Calculator.estilo}>
      <div className={Calculator.main}>
      <h1 className={Calculadora.text}>Calculadora</h1>
        <input className={Calculadora.tela} type="text" value={result} />
        <div className={Calculator.keypad}>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="/" onClick={handleClick}>
            ÷
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="*" onClick={handleClick}>
            ×
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button onClick={calculate} id="equal">
            =
          </button>
          <button onClick={clear} id="clear">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;