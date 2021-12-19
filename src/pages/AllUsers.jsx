import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:8000/users');
    setUser(response.data);
  };

  return (
    <div>
      <Link to='/add' className={csso.btn}>Pridėti naują</Link>
      <table className={csso.tableView}>
        <thead>
          <tr>
            <th>Id:</th>
            <th>Vardas:</th>
            <th>Amžius:</th>
            <th>El. paštas:</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
};
