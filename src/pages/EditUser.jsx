import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import css from './EditUser.module.css';

const EditUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const updateUser = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:8000/users/${id}`, {
      name: name,
      age: age,
      email: email,
      password: password,
    });
    history.push('/');
  };

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:8000/users/${id}`);
    setName(response.data.name);
    setAge(response.data.age);
    setEmail(response.data.email);
    setPassword(response.data.password);
  };

  return (
    <div>
      <h2>Atnaujinti vartotoją</h2>
      <form onSubmit={updateUser}>
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

        <div className={css.field}>
          <button className={css.btnGreen}>Atnaujinti</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
