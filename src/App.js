import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';


function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route path='/rgb/:red/:green/:blue'>
          <Main />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
