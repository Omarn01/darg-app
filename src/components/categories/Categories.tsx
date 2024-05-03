import { Link } from 'react-router-dom'
import style from './Categories.module.scss'

interface IProps {
  count: number
  category: ICategory[]
}

interface ICategory {
  id: number
  rus: string
  eng: string
  //   link: string
}

export default function Categories({ count, category }: IProps) {
  return (
    <div className={style.categories}>
      <ul className={style.categories_list}>
        {category.length ? (
          category.map(({ id, rus, eng }) => (
            <li key={id} className={style.category}>
              <Link to={`/categories/${eng}`}>
                <div className={style.name}>{rus}</div>
                <div className={style.count}>{count}</div>
              </Link>
            </li>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </ul>
    </div>
  )
}
