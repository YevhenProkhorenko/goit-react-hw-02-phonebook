import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from '../Phonebook/Phonebook.module.css';

export default class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div className={css.formWrapper}>
        <label htmlFor="" className={css.labelText}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.inputStyles}
        />
        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </div>
    );
  }
}
