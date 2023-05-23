import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (



    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<ItemListContainer />} /> */}

        </Routes>
      </BrowserRouter>

      <NavBar />
      <ItemListContainer />
      <Counter initial={1} stock={10} />
      <ItemDetailContainer />

    </>
  );
}

export default App;
