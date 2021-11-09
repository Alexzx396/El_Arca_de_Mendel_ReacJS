import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import CartContextProvider from './components/CartContext/CartContext';


function App() {
  return (
    <div className="App">
      <CartContextProvider >
        <BrowserRouter>
         <NavBar/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/categoria/:categoryId" component={ItemListContainer}/>
          <Route exact path="/producto/:productId" component={ItemDetailContainer}/>
        </Switch>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
