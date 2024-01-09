import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListing from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
