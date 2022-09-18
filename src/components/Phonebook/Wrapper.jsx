import React from 'react';
import css from '../Phonebook/Phonebook.module.css';

export default function Wrapper({ title, children }) {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
}
