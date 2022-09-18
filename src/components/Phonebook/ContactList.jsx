import React from 'react';
import css from '../Phonebook/Phonebook.module.css';

export default function ContactList({ contacts }) {
  const elements = contacts.map(contact => {
    return (
      <li key={contact.id} className={css.contactList}>
        {contact.name}: {contact.number}
        <button className={(css.submitButton, css.deleteButton)}>Delete</button>
      </li>
    );
  });
  return (
    <div>
      <h2 className={css.title}>Contacts</h2>
      <ul className={css.labelText}>{elements.length === 0 ? '' : elements}</ul>
    </div>
  );
}
