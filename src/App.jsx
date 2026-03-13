import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import NewFrontier from './NewFrontier'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-frontier" element={<NewFrontier />} />
      </Routes>
    </Router>
  )
}

export default App
