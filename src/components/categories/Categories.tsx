import { Link } from 'react-router-dom'
import style from './Categories.module.scss'

interface IProps {
  name: string
  count: number
}

export default function Categories({ name, count }: IProps) {
  return (
    <div className={style.categories}>
      <ul className={style.categories_list}>
        <li className={style.category}>
          <Link to='/'>
            <div className={style.name}>{name}</div>
            <div className={style.count}>{count}</div>
          </Link>
        </li>
        <li className={style.category}>
          <Link to='/'>
            <div className={style.name}>{name}</div>
            <div className={style.count}>{count}</div>
          </Link>
        </li>
        <li className={style.category}>
          <Link to='/'>
            <div className={style.name}>{name}</div>
            <div className={style.count}>{count}</div>
          </Link>
        </li>
        <li className={style.category}>
          <Link to='/'>
            <div className={style.name}>{name}</div>
            <div className={style.count}>{count}</div>
          </Link>
        </li>
        <li className={style.category}>
          <Link to='/'>
            <div className={style.name}>{name}</div>
            <div className={style.count}>{count}</div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
