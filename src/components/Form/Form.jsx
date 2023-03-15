import React from 'react';
import { useState } from 'react';
import style from './Form.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { fetchAddContact } from 'redux/contacts/contacts-operations';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameID = nanoid();
  const numberID = nanoid();

  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchAddContact({ name, number }));

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={style.section}>
      <form onSubmit={handleSubmit}>
        <div className={style.field}>
          <label className={style.fieldLabel}>
            Name
            <input
              className={style.fieldInput}
              type="text"
              name="name"
              id={nameID}
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChangeName}
            />
          </label>
        </div>
        <div className={style.field}>
          <label className={style.fieldLabel}>
            Number
            <input
              className={style.fieldInput}
              id={numberID}
              type="tel"
              name="number"
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChangeNumber}
            />
          </label>
        </div>
        <button className={style.button} type="submit" onClick={handleSubmit}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;
