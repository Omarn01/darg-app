import { Link } from 'react-router-dom'
import style from './Categories.module.scss'
import { ICategory } from '../../interfaces/category.interface'

interface IProps {
  category: ICategory[]
}

export default function Categories({ category }: IProps) {
  return (
    <div className={style.categories}>
      <ul className={style.categories_list}>
        {category.length ? (
          category.map(({ id, rus, eng, words }) => (
            <li key={id} className={style.category}>
              <Link to={`/categories/${eng}`}>
                <div className={style.name}>{rus}</div>
                <div className={style.count}>{words.length}</div>
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
