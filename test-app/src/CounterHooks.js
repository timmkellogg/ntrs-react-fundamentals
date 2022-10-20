import { useState, useEffect, useRef } from 'react'

function Counter(props) {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState('')

    const isInitalMount = useRef(true)

    useEffect(() => {
        if (isInitalMount.current) {
            // do something on first load
            console.log('initial mount')

            const initialCount = Number(localStorage.getItem('count'))

            isInitalMount.current = false

            setCount(initialCount)
        } else {
            // do something on updates
            localStorage.setItem('count', count)

            document.title = `Count - ${count}`
        }
    }, [count])

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleSet = () => {
        setCount(input)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <br />
            <br />
            <div>
                <input type="number" value={input} onChange={(event) => setInput(event.target.value)} />
                <button onClick={handleSet}>set</button>
            </div>
        </div>
    )
}

export default Counter