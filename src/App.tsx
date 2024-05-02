import { Route, Routes } from 'react-router-dom'
import './App.css'
import Search from './components/search/Search'
import Navigation from './components/ui/navigation/Navigation'
import Home from './components/home/Home'
import Categories from './components/categories/Categories'

import { word } from './data'

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/dictionary'} element={<Search />} />
        <Route
          path={'/categories'}
          element={<Categories name='Цвета' count={word.length} />}
        />
      </Routes>
      <Navigation />
    </div>
  )
}

export default App
