import { Route, Routes } from 'react-router-dom'
import './App.css'
import Search from './components/search/Search'
import Navigation from './components/ui/navigation/Navigation'
import Home from './components/home/Home'
import Categories from './components/categories/Categories'

import { category } from './data'
import Category from './components/category/Category'
import Test from './components/test/Test'

function App() {
  return (
    <div style={{ height: '100%' }}>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/dictionary'} element={<Search />} />
        <Route
          path={'/categories'}
          element={<Categories category={category} />}
        />
        <Route path={'/categories/:id'} element={<Category />} />
        <Route path={'/test'} element={<Test />} />
      </Routes>
      <Navigation />
    </div>
  )
}

export default App
