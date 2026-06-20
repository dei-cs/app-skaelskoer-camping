import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
// import AccommodationPage from './pages/AccommodationPage/AccommodationPage'
import MapPage from './pages/MapPage/MapPage'
import PracticalInfoPage from './pages/PracticalInfoPage/PracticalInfoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* <Route path='/overnatning' element={<AccommodationPage />} /> */}
        <Route path='/kort' element={<MapPage />} />
        <Route path='/praktisk' element={<PracticalInfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
