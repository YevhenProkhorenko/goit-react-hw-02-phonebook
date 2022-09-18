import Phonebook from './Phonebook/Phonebook.jsx';
import PhonebookWrapper from './Phonebook/PhonebookWrapper.jsx';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <PhonebookWrapper title="Phonebook">
        <Phonebook />
      </PhonebookWrapper>
    </div>
  );
};
