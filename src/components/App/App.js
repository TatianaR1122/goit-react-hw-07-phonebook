import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import css from '../App/App.module.css';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selector';

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </div>
  );
}
