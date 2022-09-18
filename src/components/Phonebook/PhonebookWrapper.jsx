import React from 'react';

export default function PhonebookWrapper({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
