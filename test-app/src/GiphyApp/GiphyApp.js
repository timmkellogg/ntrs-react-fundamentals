import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SavedPage from './pages/SavedPage'
import SearchPage from './pages/SearchPage'

function GiphyApp() {
    const [user, setUser] = useState(null)

    const handleLogin = (username) => {
      setUser({ username: username })
    }

    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route index element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='saved' element={<SavedPage user={user} handleLogin={handleLogin} />} />
            <Route path='*' element={<div>404 - Page Not Found</div>}/>
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default GiphyApp