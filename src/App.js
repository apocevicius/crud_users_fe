import { Route, Switch } from 'react-router-dom';
import AllUsers from './pages/UserList';
import AddUser from './pages/AddUser';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/all'>
          <AllUsers />
        </Route>
        <Route path='/add'>
          <AddUser />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
