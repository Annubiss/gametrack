import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GameDetail from './pages/GameDetail'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:dealID' element={<GameDetail />} />
    </Routes>
  )
}

export default App