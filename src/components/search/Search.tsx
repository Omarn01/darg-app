import { useEffect, useState } from 'react'
import { word } from '../../data'

import { IoSearch } from 'react-icons/io5'

import style from './Search.module.scss'

interface IWords {
  id: number
  rus: string
  darg: string
}

export default function Search() {
  const [search, setSearch] = useState('')
  const [searchWord, setSearchWord] = useState<IWords[]>([])
  const [words, _] = useState<IWords[]>(word)

  const getSearchWord = () => {
    console.log(search)
    setTimeout(() => {
      setSearchWord([
        ...words.filter((word: IWords) => word.rus.includes(search)),
      ])
    }, 300)
  }

  useEffect(() => {
    getSearchWord()
  }, [search])

  return (
    <div>
      <div className={style.header}>Русско-даргинский</div>
      <div className={style.wrap}>
        <div className={style.input_wrap}>
          <IoSearch className={style.search_icon} />
          <input
            className={style.input}
            type='text'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div
            onClick={() => setSearch('')}
            style={{ display: search ? 'block' : 'none' }}
            className={style.clear}
          >
            X
          </div>
        </div>
        <ul className={style.list}>
          {searchWord.map(({ id, rus, darg }: IWords) => (
            <li key={id}>
              {rus} - {darg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
