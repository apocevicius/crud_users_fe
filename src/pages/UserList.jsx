import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import css from './UserList.module.css';

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:8000/users');
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    getUsers();
  };

  return (
    <div>
      {/* <Link to='/add' className={css.addNewBtn}>
        Pridėti naują
      </Link> */}
      <h1>Vartotojai:</h1>
      <table className={css.tableView}>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Vardas:</th>
            <th>Amžius:</th>
            <th>El. paštas:</th>
            <th>Veiksmai:</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`} className={css.btnBlue}>
                  Redaguoti
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className={css.btnRed}
                >
                  Ištrinti
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
