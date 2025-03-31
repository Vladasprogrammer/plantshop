import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsProvider } from './contexts/productsContext';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductsProvider>
);

