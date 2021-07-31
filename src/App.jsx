import './App.sass';
import Navbar from './components/Navbar/Navbar';
import {ItemListContainer} from './components/ItemList/ItemListContainer';
export const App = () => {
  const saludos = 'Hola como estan?';
  return (
    <>
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="wrapper">
      <div className="container alert-info">
        <ItemListContainer greetings={saludos}  />

      </div>
      </div>
    </div>
    </>
  );
}