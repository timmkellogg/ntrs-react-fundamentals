import { useState } from 'react'

const withCounter = (WrappedComponent) => {
  function WithCounter(props) {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
      console.log(count)
      setCount(count + 1)
    }

    const decrementCount = () => setCount(count - 1)
    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        {...props}
      />
    )
  }
  return WithCounter
}

export default withCounter



