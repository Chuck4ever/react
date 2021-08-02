// import './App.sass';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart'
import { CartProvider } from './components/CartContext/CartContext';

export const App = () => {
  return (
    <>
    <CartProvider defaultCart={[]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ ItemListContainer } />
          <Route path="/category/:id" component={ ItemListContainer } />
          <Route path="/item/:id" component={ ItemDetailContainer } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </Router>
    </CartProvider>
    </>
  );
}