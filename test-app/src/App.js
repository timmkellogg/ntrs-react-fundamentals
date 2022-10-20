import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


import Navbar from './components/Navbar'
import LoginPage from './LoginPage'
import ToDoHooks from './ToDoHooks'

import { AuthProvider } from './contexts/AuthContext'

function App() {
  
  return (
      <BrowserRouter>
        <AuthProvider>
          <Navbar />

          <Routes>
            <Route index element={<div>home page</div>}/>
            <Route path='/login' element={<LoginPage  />}/>
            <Route path='/todo' element={<ToDoHooks />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App
