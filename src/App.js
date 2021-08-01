import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import FirstPage from './components/FirstPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={FirstPage}></Route>
          <Route path="/login" exact component={LoginPage}></Route>
          <Route path="/start" exact component={MainPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
