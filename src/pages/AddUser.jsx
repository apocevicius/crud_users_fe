import { useEffect, useState } from 'react';
import css from './AddUser.module.css';
import Axios from 'axios';

function AddUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/api/get').then((response) => {
      setUsersList(response.data);
    });
  }, []);

  const addUser = () => {
    Axios.post('http://localhost:8000/api/add', {
      name: name,
      age: age,
      email: email,
      password: password,
    }).then(() => {
      setUsersList([
        ...setUsersList,
        { name: name, age: age, email: email, password: password },
      ]);
    });
  };

  const deleteUser = (user) => {
    Axios.delete(`http://localhost:8000/api/delete/${user}`);
  };

  const updateUser = (user) => {
    Axios.put('http://localhost:8000/api/update', {
      name: name,
      age: age,
      email: email,
    });
  };

  return (
    <div className={css.container}>
      <h1>Add User</h1>
      <div className={css.form}>
        <label>Vardas:</label>
        <input
          className={css.input}
          type='text'
          name='name'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Amžius:</label>
        <input
          className={css.input}
          type='text'
          name='age'
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label>El. Paštas:</label>
        <input
          className={css.input}
          type='text'
          name='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Slaptažodis:</label>
        <input
          className={css.input}
          type='password'
          name='password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={addUser} className={css.btn}>
          Sukurti
        </button>

        {usersList.map((value) => {
          return (
            <div className={css.card}>
              <h4>Vardas:</h4>
              <p>{value.name}</p>
              <h4>Metai:</h4>
              <p>{value.age}</p>
              <h4>El paštas:</h4>
              <p>{value.email}</p>
              <button>Atnaujinti</button>
              <button
                onClick={() => {
                  deleteUser(value.name);
                }}
              >
                Ištrinti
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddUser;
