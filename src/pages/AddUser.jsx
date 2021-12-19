import { useState } from 'react';
import css from './AddUser.module.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const saveUser = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/users', {
      name: name,
      age: age,
      email: email,
      password: password,
    });
    history.push('/');
  };

  return (
    <div>
      <h2>Sukurti vartotoją</h2>
      <form onSubmit={saveUser}>
        <div className={css.field}>
          <input
            className={css.input}
            type='text'
            placeholder='Vardas'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={css.field}>
          <input
            className={css.input}
            type='text'
            placeholder='Amžius'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className={css.field}>
          <input
            className={css.input}
            type='text'
            placeholder='El. paštas'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={css.field}>
          <input
            className={css.input}
            type='password'
            placeholder='Slaptažodis'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className=''>
          <button className={css.btnGreen}>Išsaugoti</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
