import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from 'data/initialContacts';

const initialState = {
  data: initialContacts,
  filter: '',
};

const formSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addcontacts: (state, { payload }) => {
      state.data.push(payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },

    deleteContact: (state, { payload }) => {
      state.data = state.data.filter(contact => contact.id !== payload);
    },
  },
});

export const formReducer = formSlice.reducer;

export const { addcontacts, deleteContact, changeFilter } = formSlice.actions;
