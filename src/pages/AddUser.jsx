import css from './AddUser.module.css';

function AddUser() {
  return (
    <div className={css.container}>
      <h1>Add User</h1>
      <div className={css.form}>
        <label>Vardas:</label>
        <input className={css.input} type='text' />
        <label>Amžius:</label>
        <input className={css.input} type='text' />
        <label>El. Paštas:</label>
        <input className={css.input} type='text' />
        <label>Slaptažodis:</label>
        <input className={css.input} type='text' />
        <button className={css.btn}>Sukurti</button>
      </div>
    </div>
  );
}

export default AddUser;
