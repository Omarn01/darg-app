import { Link } from 'react-router-dom'
import style from './Navigation.module.scss'

export default function Navigation() {
  return (
    <div className={style.navigation}>
      <ul className={style.pag}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/categories'}>Categories</Link>
        </li>
        <li>
          <Link to='/dictionary'>Dictionary</Link>
        </li>
      </ul>
    </div>
  )
}
