import style from './Category.module.scss'

import { useParams } from 'react-router-dom'

import { words } from '../../data'
import { useEffect, useState } from 'react'
import { IWord } from '../../interfaces/word.interface'

export default function Category() {
  const { id } = useParams()

  const [categoryWords, setCategoryWords] = useState<IWord[]>([])

  useEffect(() => {
    setCategoryWords(words.filter(({ category }: IWord) => category[0] === id))
  }, [])

  return (
    <div className={style.category}>
      <ul>
        {categoryWords.map(({ id, rus, darg }: IWord) => (
          <li className={style.word} key={id}>
            <div className={style.rus}>{rus}</div>
            <div className={style.delimiter}>-</div>
            <div className={style.darg}>{darg}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
