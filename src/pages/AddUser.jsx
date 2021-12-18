import { useEffect, useState } from 'react';
import css from './AddUser.module.css';
import Axios from 'axios';

function AddUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usersList, setUsersList] = useState([])

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
      alert('Successfully added');
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
              <h1>Name: {value.name} | Age: {value.age} | Email: {value.email}</h1>
            )
          })}

      </div>
    </div>
  );
}

export default AddUser;
