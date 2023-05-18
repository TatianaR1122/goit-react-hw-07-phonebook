import React from 'react';
import css from './Filter.module.css';
import { changeFilter } from 'redux/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(changeFilter(value));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};
