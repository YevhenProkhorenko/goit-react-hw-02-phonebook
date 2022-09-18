import React from 'react';
import css from '../Phonebook/Phonebook.module.css';

export default function ContactList({ contacts, removeContact }) {
  const elements = contacts.map(contact => {
    return (
      <li key={contact.id} className={css.contactList}>
        {contact.name}: {contact.number}
        <button
          className={(css.submitButton, css.deleteButton)}
          onClick={() => removeContact(contact.id)}
        >
          Delete
        </button>
      </li>
    );
  });
  return (
    <div>
      <ul className={css.labelText}>{elements.length === 0 ? '' : elements}</ul>
    </div>
  );
}
