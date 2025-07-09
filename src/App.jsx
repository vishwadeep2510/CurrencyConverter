import React from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";
import { InputBox } from "./components";

function App() {
  const [inputAmount, setInputAmount] = useState(0);
  const [sourceCurrency, setSourceCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");
  const [outputAmount, setOutputAmount] = useState(0);

  const exchangeRates = useCurrencyInfo(sourceCurrency);
  const currencyList = Object.keys(exchangeRates);

  const handleSwap = () => {
    setSourceCurrency(targetCurrency);
    setTargetCurrency(sourceCurrency);
    setInputAmount(outputAmount);
    setOutputAmount(inputAmount);
  };

  const handleConvert = () => {
    setOutputAmount(inputAmount * exchangeRates[targetCurrency]);
  };

  const BackgroundImage =
    "https://4kwallpapers.com/images/wallpapers/day-trading-3840x2160-13833.jpg";

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConvert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amountValue={inputAmount}
                selectedCurrencyValue={sourceCurrency}
                currencyOptions={currencyList}
                onAmountChange={(val) => setInputAmount(val)}
                onCurrencyChange={(val) => setSourceCurrency(val)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={handleSwap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amountValue={outputAmount}
                selectedCurrencyValue={targetCurrency}
                currencyOptions={currencyList}
                onCurrencyChange={(val) => setTargetCurrency(val)}
                amountDisable={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
