import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
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
      {/* <Footer/> */}
    </div>
  );
}

export default App;
