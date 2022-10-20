import { useState, useMemo } from 'react'

function Counter() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const isEven = useMemo(() => {
        console.log('about to run')
        let i = 0
        //arbitrarily slowing down function
        while (i < 3000000000) i++
        return countOne % 2 === 0
    }, [countOne])
    

    return (
        <div>
            <div>
                <button onClick={() => setCountOne(countOne + 1)}>Count One - {countOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={() => setCountTwo(countTwo + 1)}>Count Two - {countTwo}</button>
            </div>
        </div>
    )
}

export default Counter