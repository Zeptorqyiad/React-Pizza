import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'

import { Header } from './components'
import { Home, Cart } from './pages'
import { setPizzas as setPizzasAction } from './redux/actions/pizzas'

// function App() {
//    React.useEffect(() => {
//       axios.get('http://localhost:3000/db.json').then(({ data }) => {
//          setPizzas(data.pizzas)
//       })
//    }, [])
//    return
// }

class App extends React.Component {
   componentDidMount() {
      axios.get('http://localhost:3000/db.json').then(({ data }) => {
         this.props.setPizzas(data.pizzas)
      })
   }

   render() {
      return (
         <div className="wrapper">
            <Header />
            <div className="content">
               <Routes>
                  <Route path="/" element={<Home items={this.props.items} />} />
                  <Route path="/cart" element={<Cart />} />
               </Routes>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      items: state.pizzas.items,
      filters: state.filters,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setPizzas: (items) => dispatch(setPizzasAction(items)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
