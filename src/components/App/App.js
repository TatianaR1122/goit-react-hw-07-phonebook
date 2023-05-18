import ContactForm from '../ContactForm/ContactForm';
import css from '../App/App.module.css';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </div>
  );
}
