import HomePage from '../Pages/HomePage'
import RegistroPage from '../Pages/RegistroPage'
import LoginPage from '../Pages/LoginPage'
import {
  Routes,
  Route
} from "react-router-dom"
import DetallePage from '../Pages/DetallePage';
import CartPage from '../Pages/CartPage';
import ProductosAlta from '../Pages/ProductosAlta';


function Public() {
  return (
      <Routes>
       <Route path='/' element={<HomePage />} />
        <Route path='/alta' element={<RegistroPage />} />
        <Route path='/ingresar' element={<LoginPage />} />
        <Route path='/productos/alta' element={<ProductosAlta />}  />
        
        <Route path='/producto/:id' element={<DetallePage />}  />
        <Route path='/menu' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
  );
}

export default Public;
