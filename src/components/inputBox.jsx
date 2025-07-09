import { useId } from "react";
function InputBox({
  label,
  className = "",
  amountValue,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrencyValue = "USD",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div
      className={`flex items-center justify-between bg-white rounded-lg p-4 shadow-md ${className}`}
    >
      {/* Left side: Label and Amount */}
      <div className="flex-1 pr-4">
        <label
          htmlFor={amountInputId}
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          value={amountValue}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
        />
      </div>

      {/* Right side: Currency select */}
      <div className="w-36">
        <label
          htmlFor={`${amountInputId}-currency`}
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Currency
        </label>
        <select
          id={`${amountInputId}-currency`}
          value={selectedCurrencyValue}
          disabled={currencyDisable}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          className="w-full border border-gray-300 rounded-md px-2 py-2 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500 cursor-pointer"
        >
          {currencyOptions.map((currencyCode) => (
            <option key={currencyCode} value={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
