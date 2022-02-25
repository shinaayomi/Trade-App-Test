
import './App.css';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNgn } from "./redux/actions/ngnAction";
import { fetchEur } from "./redux/actions/eurAction";
import { fetchGbp } from "./redux/actions/gbpAction";

function App() {

  const [input, setInput] = useState("");
  const [fiat, setFiat] = useState("NGN");
  const [totalFiat, setTotalFiat] = useState("0.00");

  const { ngn } = useSelector((state) => state.ngn);
  const { eur } = useSelector((state) => state.eur);
  const { gbp } = useSelector((state) => state.gbp);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNgn());
    dispatch(fetchEur());
    dispatch(fetchGbp());
  }, [dispatch]);

  function convertToCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async function fiatCalculator(x, y) {
    let USD_NGN = ngn.result;
    let USD_EUR = eur.result;
    let USD_GBP = gbp.result;
    let fiat;

    if (y === "NGN") {
      fiat = x * USD_NGN;
    } else if (y === "EUR") {
      fiat = x * USD_EUR;
    } else if (y === "GBP") {
      fiat = x * USD_GBP;
    }
    setTotalFiat(convertToCommas(parseFloat(fiat.toFixed(2))));
  }

  const handleInput = (e) => {
    let value = e.target.value;
    setInput(value);
    fiatCalculator(Math.abs(value), fiat);
  };

  const handleFiatRate = (e) => {
    let rate = e.target.value;
    setFiat(rate);
    fiatCalculator(input, rate);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div className="input-container">
            <div>
              <input 
                type="text" 
                placeholder="0.00" 
                onChange={handleInput}
                value={input}
              />
            </div>
            <div className="usd">USD</div>
          </div>
          <div className="input-container">
            <div>
              <input 
                type="text" 
                placeholder="0.00" 
                value={totalFiat}
              />
            </div>
            <select name="fiat" onChange={handleFiatRate} value={fiat}>
              <option value="NGN">NGN</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
