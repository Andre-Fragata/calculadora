import React, { useState } from "react";
import Calculator from './Calculadora.module.css'

function Calculadora() {
  const [result, setResult] = useState("");
  const [lastStep, setLastStep] = useState("start") //Utilizado para identificar se o ultimo passo foi o resultado, para que possamos limpar o input para o proximo calculo

  const handleClick = (e) => {
    if(lastStep == "end"){
      setLastStep("start");
      setResult(e.target.name)
    }else{
      setResult(result.concat(e.target.name));
    }
  };

  const calculate = () => {
    try {
      if(eval(result).toString() == "Infinity"){
        setResult("Não é possível dividir por zero")
      }else{
        setResult(eval(result).toString());
      }
    } catch (err) {
      setResult("Error");
    }
    setLastStep("end")
  };

  const clear = () => {
    setResult("");
  };

  return (
    <section className={Calculator.estilo}>
      <main className={Calculator.main}>
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
      </main>
    </section>
  );
}

export default Calculadora;
