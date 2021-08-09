import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import FirstPage from './components/FirstPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import { useState } from 'react'
import AppContext from './components/AppContext';
function App() {
  const [gname, setGname] = useState(null);
  const [gemail, setGemail] = useState(null);
  const [gstart, setGstart] = useState(null);
  const [ggoals, setGgoals] = useState(null);
  const [gdays, setGdays] = useState(null);
  const userInfo = {name: gname, email: gemail, startDay: gstart, days: gdays, goals:ggoals, 
                    setGname, setGemail, setGstart, setGdays, setGgoals};
  return (
    <AppContext.Provider value={userInfo}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={FirstPage}></Route>
            <Route path="/login" exact component={LoginPage}></Route>
            <Route path="/start" exact component={MainPage}></Route>
            <Route path="/register" exact component={RegisterPage}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
