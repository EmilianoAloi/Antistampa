import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Aca no juzgamos a nadie !'} />
      <Cards />
    </>
  );
}

export default App;
