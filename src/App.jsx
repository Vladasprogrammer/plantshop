import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='products' element={<Products />}/>
          <Route path='products/:id' element={<Product />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='*' element={<Page404 />}/>
        </Route>

      </Routes>
      
    </div>
  );
}

export default App;