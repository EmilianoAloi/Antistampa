import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import Item from './components/Item/Item';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Aca no juzgamos a nadie !'} />
      <Counter initial={1} stock={10} />
      <img src="../assets/jimihendrix.jpg" alt="" />
    </>
  );
}

export default App;
