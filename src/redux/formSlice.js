import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initState = {
  contacts: {
    items: [],
    // isLoading: true,
    isLoading: false,
    error: null,
  },
  filter: '',
};

const formSlice = createSlice({
  name: 'contacts',
  initialState: initState.contacts,

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initState.filter,

  reducers: {
    FILTER: (_, { payload }) => payload,
  },
});

export const { FILTER } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const formReducer = formSlice.reducer;
