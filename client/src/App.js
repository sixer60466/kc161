import { Routes, Route } from 'react-router-dom'
import './styles/style.scss';
import Home from './view/front-end/Home';
import ProductPage from './view/front-end/ProductPage'
import ProductInnerPage from './view/front-end/ProductInnerPage';
import Layout from './view/front-end/Layout';
import Layout_backboard from './view/backboard/Layout';
import Home_backboard from './view/backboard/Home'
import Sign_in from './view/backboard/Sign_in';

function App() {
  return (
    <Routes>
      <Route path='/admin/sign_in' element={<Sign_in />}></Route>
      <Route path='/admin' element={<Layout_backboard />}>
        <Route path='/admin' element={<Home_backboard />}></Route>
      </Route>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='product/:category' element={<ProductPage />} ></Route>
        <Route path='product/:category/:id' element={<ProductInnerPage />}></Route>
      </Route>
    </Routes >
  );
}


export default App;
