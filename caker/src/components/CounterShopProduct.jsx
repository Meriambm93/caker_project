import { useState } from "react"

const CounterShopProduct = () => {
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
    <div>
      <span onClick={decrement} className="btn btn-success mr-5" id="btn-minus">
        -
      </span>
      <span className="badge bg-secondary" id="var-value" value={count}>
        {count}
      </span>
      <span
        onClick={increment}
        className="btn btn-success m-auto"
        id="btn-plus"
      >
        +
      </span>
    </div>
  )
}

export default CounterShopProduct
