import { Route, Switch } from 'react-router-dom';
import AllUsers from './pages/AllUsers';
import AddUser from './pages/AddUser';
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
      </Switch>
    </div>
  );
}

export default App;
