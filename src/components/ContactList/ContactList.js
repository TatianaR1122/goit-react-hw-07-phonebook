import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { filteredContacts } from 'redux/selector';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(filteredContacts);

  return (
    <ul className={css.ul}>
      {contacts.map(({ name, phone, id }) => {
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
