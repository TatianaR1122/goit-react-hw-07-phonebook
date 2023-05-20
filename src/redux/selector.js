export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;

export const filteredContacts = state => {
  const contacts = getContacts(state);

  const filtered = state.filter;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );
};
