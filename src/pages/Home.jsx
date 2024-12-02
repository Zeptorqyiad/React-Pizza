import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, SortPopup, PizzaBlock } from '../components'
import { setCategory } from '../redux/actions/filters'

const categoryNames = ['Мясные', 'Вегетаринские', 'Гриль', 'Острые', 'Закрытые']
const sortItem = [
   { name: 'популярности', type: 'popular' },
   { name: 'цене', type: 'price' },
   { name: 'алфавиту', type: 'alphabet' },
]

function Home() {
   const dispatch = useDispatch()
   const items = useSelector(({ pizzas }) => pizzas.items)

   const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
   }, [])

   return (
      <div className="container">
         <div className="content__top">
            <Categories onCLickItem={onSelectCategory} items={categoryNames} />
            <SortPopup items={sortItem} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {items &&
               items.map((obj) => (
                  <PizzaBlock key={`${obj}_${obj.id}`} {...obj} />
               ))}
         </div>
      </div>
   )
}

export default Home
