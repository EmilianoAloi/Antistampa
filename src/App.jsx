import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Counter from './components/Counter/Counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (



    <>
      <BrowserRouter>
        <NavBar />


        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/categoria/:idCat' element={<ItemListContainer />} />
          <Route path='/item/' element={<ItemDetailContainer />} />
        </Routes>


      </BrowserRouter>

      <Counter initial={1} stock={10} />
      {/* <Link to={`item/${id}`}>Ver detalles</Link> */}


    </>
  );
}

export default App;
