import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Header from './Components/Header/Header';
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App