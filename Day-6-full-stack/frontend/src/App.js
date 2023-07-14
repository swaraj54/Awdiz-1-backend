import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';
import AddProduct from './Components/AddProduct';
import AllProducts from './Components/AllProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/add-product' element={<AddProduct />} />
        <Route exact path='/all-products' element={<AllProducts />} />
      </Routes>
    </div>
  );
}

export default App;
