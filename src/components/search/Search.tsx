import { useEffect, useState } from 'react'
import { words } from '../../data'

import { IoSearch } from 'react-icons/io5'
import { IoIosArrowUp } from 'react-icons/io'

import style from './Search.module.scss'

interface IWords {
  id: number
  rus: string
  darg: string
}

export default function Search() {
  const [search, setSearch] = useState('')
  const [searchWord, setSearchWord] = useState<IWords[]>()

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
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.option}>
          <h3>Русско-даргинский</h3>
          <div className={style.drop_icons}>
            <IoIosArrowUp />
          </div>
        </div>
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
      </div>
      {searchWord ? (
        <div className={style.wrap}>
          <ul className={style.list}>
            {searchWord.map(({ id, rus, darg }: IWords) => (
              <li key={id}>
                {rus} - {darg}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={style.loading}>
          <h1>Loading</h1>
        </div>
      )}
      {searchWord?.length === 0 && (
        <h1 className={style.not_found}>Ничего не найдено</h1>
      )}
    </div>
  )
}
