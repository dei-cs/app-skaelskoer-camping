import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import AccommodationPage from './pages/AccommodationPage/AccommodationPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/overnatning' element={<AccommodationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
