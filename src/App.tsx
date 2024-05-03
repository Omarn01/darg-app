import { Route, Routes } from 'react-router-dom'
import './App.css'
import Search from './components/search/Search'
import Navigation from './components/ui/navigation/Navigation'
import Home from './components/home/Home'
import Categories from './components/categories/Categories'

import { category, words } from './data'
import Category from './components/category/Category'

function App() {
  return (
    <div style={{ height: '100%' }}>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/dictionary'} element={<Search />} />
        <Route
          path={'/categories'}
          element={<Categories category={category} count={words.length} />}
        />
        <Route path={'/categories/:id'} element={<Category />} />
      </Routes>
      <Navigation />
    </div>
  )
}

export default App
