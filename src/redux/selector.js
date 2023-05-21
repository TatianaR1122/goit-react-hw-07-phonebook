import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

// export const filteredContacts = state => {
//   const contacts = selectContacts(state);

//   const filtered = state.filter;
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filtered.toLowerCase())
//   );
// };

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
