import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Jeopardy from './Jeopardy'
import Hello from './Hello'
import Counter from './Counter'
import Signup from './SignUpForm'

const user = {
  id: 1,
  username: 'tim',
  type: 'admin'
}

function App() {

  return (
    <BrowserRouter>
      <Navbar user={user} />

      <Routes>
        <Route index element={<Hello user={user} />} />

        <Route path='signup' element={<Signup />} />
        <Route path='/jeopardy' element={<Jeopardy user={user} />} />
        <Route path='/counter' element={<Counter user={user}  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
