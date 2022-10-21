# Redux

Redux is the offical state management library for React. Redux helps centrally manage state interactions as application state grows in complexity. 

## Installation

Redux can be installed into an existing application using npm.

``` bash
npm install react-redux @reduxjs/toolkit
```

New applications initialized by Create React App can also install Redux as a part of a template.

``` bash
# Redux + JS
npx create-react-app my-app --template redux

# Redux + TypeScript 
npx create-react-app my-app --template redux-typescript
```

## Using Redux + Redux Toolkit

`src/app/store.js`
``` js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
```

`src/counter/counterSlice.js`
``` js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```


`src/App.js`
``` js
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App

```

## Resources

* [https://redux.js.org/introduction/getting-started](https://redux.js.org/introduction/getting-started)