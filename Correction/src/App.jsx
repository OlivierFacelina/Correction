import { useState } from "react";
import React from "react";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";

const currencies = ["Euro", "Dollar"]
const convert_euro_usd = 1.05

export default function App() {
  const [devise1, setDevise1] = useState("");
  const [devise2, setDevise2] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if(isNaN(amount) || !devise1 || !devise2) {
      return;
    }
    let result = 0
    if(devise1 == 'Euro' && devise2 == 'Dollar') {
      result = amount * convert_euro_usd
    }
    else if(devise1 == 'Dollar' && devise2 == 'Euro') {
      result = amount / convert_euro_usd
    }
    result = result.toFixed(2)
    setVisible(true);
    setResult(result)
  } 

  console.log(devise1)
  console.log(devise2)
  console.log(amount)

  return (
    <div className="row justify-content-center">
      <div className="col-4 pt-5">
        {
          visible && (
            <div className="alert alert-dark" role="alert">
              <p>Le résultat de la conversion est :<br /> {`${amount} ${devise1} => ${result} ${devise2}`}</p>
            </div>)
        }
        <form action="">
            <AmountInput amount={amount} setAmount={setAmount} setVisible={setVisible}/>
            <CurrencySelector devise={devise1} currencies={currencies} setDevise={setDevise1}/>
            <CurrencySelector devise={devise2} currencies={currencies} setDevise={setDevise2}/>
          <div className="d-grid">
            <button className="btn btn-dark" type="button" onClick={handleClick}>
              Convertir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
