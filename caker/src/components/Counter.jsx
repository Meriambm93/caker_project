import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)

    if (count < 1) {
      setCount(0)
    }
  }

  return (
    <div className="counterCard">
      <div onClick={decrement} className="btnCartShop">
        -
      </div>
      <div className="countCard">{count}</div>
      <input type="hidden" name="product-quanity" id="shop" value={count} />

      <div onClick={increment} className="btnCartShop">
        +
      </div>
    </div>
  )
}

export default Counter
