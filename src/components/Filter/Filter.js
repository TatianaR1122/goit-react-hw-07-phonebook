import React from 'react';
import css from './Filter.module.css';
import { FILTER } from 'redux/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = evt => {
    dispatch(FILTER(evt.target.value));
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
