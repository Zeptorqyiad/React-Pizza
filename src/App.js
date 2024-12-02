import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'

import { Header } from './components'
import { Home, Cart } from './pages'
import { setPizzas } from './redux/actions/pizzas'

function App() {
   const dispatch = useDispatch()

   React.useEffect(() => {
      // Перенести в Redux и подключить redux-thunk
      // Следить за фильтрацией и сортировкой
      axios.get('http://localhost:3001/pizzas').then(({ data }) => {
         dispatch(setPizzas(data))
      })
   }, [])

   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/cart" element={<Cart />} />
            </Routes>
         </div>
      </div>
   )
}

export default App
