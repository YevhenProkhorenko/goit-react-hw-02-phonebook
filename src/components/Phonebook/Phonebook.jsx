import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import css from '../Phonebook/Phonebook.module.css';

export default class Phonebook extends Component {
  state = {
    contacts: [],
  };

  addConctact = data => {
    this.setState(prevState => {
      const newContact = { id: nanoid(), ...data };

      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    const { addConctact } = this;
    const { contacts } = this.state;
    return (
      <>
        <div className={css.mainWrapper}>
          <ContactForm onSubmit={addConctact} />
        </div>
        <div>
          <ContactList contacts={contacts} />
        </div>
      </>
    );
  }
}
