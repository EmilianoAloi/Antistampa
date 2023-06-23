import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/Theme/Theme';
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import NavBar from './components/Navbar/NavBar';
import WpWidget from './components/WpWidget/WpWidget';
import Checkout from './components/Checkout/Checkout';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {


  return (

    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <WpWidget />


            <Routes>
              <Route path='/' element={<Hero />} />
              <Route path='/categoria/:idCategory' element={<ItemListContainer />} />
              <Route path='/item/:idItem' element={<ItemDetailContainer />} />
              <Route path='*' element={<h2>En construccion</h2>} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>

            <Footer />

          </CartProvider>
        </BrowserRouter>
      </ThemeProvider>

    </>
  );
}

export default App;
