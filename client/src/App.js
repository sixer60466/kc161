import { Routes, Route } from 'react-router-dom'
import './styles/style.scss';
import Home from './view/front-end/Home';
import ProductPage from './view/front-end/ProductPage'
import ProductInnerPage from './view/front-end/ProductInnerPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='product' element={<ProductPage />}>
          <Route path='id' element={<ProductInnerPage />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}


export default App;
