import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './pages/UserList';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='columns'>
          <div className='columnHalf'>
            <Switch>
              <Route exact path='/'>
                <UserList />
              </Route>
              <Route exact path='/add'>
                <AddUser />
              </Route>
              <Route exact path='/edit/:id'>
                <EditUser />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
