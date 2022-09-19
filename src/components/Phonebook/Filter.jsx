import React from 'react';
import css from '../Phonebook/Phonebook.module.css';

export default function Filter({ filter, onChange }) {
  return (
    <div>
      <label className={(css.labelText, css.formFlex)}>
        Find contacts by name:
        <input
          className={css.inputStyles}
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
