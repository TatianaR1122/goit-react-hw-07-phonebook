import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'redux/selector';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <ul className={css.ul}>
      {getVisibleContacts().map(({ name, number, id }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
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
