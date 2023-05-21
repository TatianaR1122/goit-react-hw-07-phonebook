import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
// import { filteredContacts } from 'redux/selector';
import { selectVisibleContacts } from 'redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const visibleContacts = useSelector(selectVisibleContacts);
  // const contacts = useSelector(filteredContacts);

  return (
    <ul className={css.ul}>
      {visibleContacts.map(({ name, phone, id }) => {
        return <ContactListItem key={id} id={id} name={name} phone={phone} />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
