import './App.sass';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
export const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ ItemListContainer } />
        <Route path="/category/:id" component={ ItemListContainer } />
        <Route path="/item/:id" component={ ItemDetailContainer } />
      </Switch>
    </Router>
    </>
  );
}