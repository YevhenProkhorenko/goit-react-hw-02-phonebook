import React from 'react';
import css from '../Phonebook/Phonebook.module.css';

export default function Wrapper({ title, children }) {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
}
