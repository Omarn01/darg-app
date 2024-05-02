import { Route, Routes } from 'react-router-dom'
import './App.css'
import Search from './components/search/Search'
import Navigation from './components/ui/navigation/Navigation'
import Home from './components/home/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/dictionary'} element={<Search />} />
      </Routes>
      <Navigation />
    </div>
  )
}

export default App
