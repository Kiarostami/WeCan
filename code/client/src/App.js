import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import FirstPage from './components/FirstPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import { useState, useEffect } from 'react';
import AppContext from './components/AppContext';
import Axios from 'axios';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [users, setUsers] = useState([]);
  const [gname, setGname] = useState(null);
  const [gemail, setGemail] = useState(null);
  const [gstart, setGstart] = useState(null);
  const [ggoals, setGgoals] = useState(null);
  const [gdays, setGdays] = useState(null);
  const userInfo = {users: users, name: gname, email: gemail, startDay: gstart, days: gdays, goals:ggoals, 
                    setGname, setGemail, setGstart, setGdays, setGgoals};
  useEffect(()=>{Axios.get("http://localhost:3001/api/get").then((response) => {
                setUsers(response.data);})
  }, []);
  return (
    <AppContext.Provider value={userInfo}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={FirstPage}></Route>
            <Route path="/login" exact component={LoginPage}></Route>
            <Route path="/start" exact component={MainPage}></Route>
            <Route path="/register" exact component={RegisterPage}></Route>
            <Route path="/profile" exact component={ProfilePage}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
