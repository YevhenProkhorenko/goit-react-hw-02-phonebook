import Phonebook from './Phonebook/Phonebook.jsx';
import Wrapper from './Phonebook/Wrapper.jsx';

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
      <Wrapper title="Phonebook">
        <Phonebook />
      </Wrapper>
    </div>
  );
};
