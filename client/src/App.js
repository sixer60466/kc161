import { Routes, Route } from 'react-router-dom'
import './styles/style.scss';
import Home from './view/front-end/Home';
import ProductPage from './view/front-end/ProductPage'
import ProductInnerPage from './view/front-end/ProductInnerPage';
import Layout from './view/front-end/Layout';
import LayoutBackboard from './view/backboard/Layout';
import HomeBackboard from './view/backboard/Home'
import Login from './view/backboard/Login';
import Register from './view/backboard/Register';
import Category from './view/backboard/Category';
import Product from './view/backboard/Product';
import CategoryEdit from './view/backboard/CategoryEdit';
import ProductEdit from './view/backboard/ProductEdit';

function App() {
  return (
    <Routes>
      <Route path='/admin/login' element={<Login />}></Route>
      <Route path='/admin/register' element={<Register />}></Route>
      <Route path='/admin' element={<LayoutBackboard />}>
        <Route path='home' element={<HomeBackboard />}></Route>
        <Route path='category' element={<Category />}></Route>
        <Route path='category/create' element={<CategoryEdit />}></Route>
        <Route path='category/:id' element={<CategoryEdit />}></Route>
        <Route path='product' element={<Product />}></Route>
        <Route path='product/create' element={<ProductEdit />}></Route>
        <Route path='product/:id' element={<ProductEdit />}></Route>
      </Route>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='product/:category' element={<ProductPage />} ></Route>
        <Route path='product/:category/:id' element={<ProductInnerPage />}></Route>
      </Route>
      <Route path="*" element={<div>404 Not Found</div>}></Route>
    </Routes >
  );
}


export default App;
