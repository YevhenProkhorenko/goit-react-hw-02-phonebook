import { Component } from 'react';
import ContactForm from './ContactForm';
import css from '../Phonebook/Phonebook.module.css';

export default class Phonebook extends Component {
  state = {
    contacts: [],
  };

  addConctact = data => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    });
  };

  render() {
    const { addConctact } = this;
    return (
      <div className={css.mainWrapper}>
        <ContactForm onSubmit={addConctact} />
      </div>
    );
  }
}
