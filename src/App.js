import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import NotFound from './NotFound/NotFound';
import Home from './Home/Home';




function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>

        <Route path='/rgb/:red/:green/:blue'>
          <Main />
        </Route>


        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>
        



      </Switch>
      
    </div>
  );
}

export default App;
