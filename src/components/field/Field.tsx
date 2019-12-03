import React from 'react';
import './Field.scss';
import { useSelector } from 'react-redux';
import { ActiveFieldState } from '../../library/reducers/activeField';
import { RoundState } from '../../library/reducers/round';
import { CounterState } from '../../library/reducers/counter';

const Field: React.FC<{ index: number }> = (props) => {
  const number = props.index + 1;
  const { field } = useSelector(
    (state: { ActiveField: ActiveFieldState }) => state.ActiveField,
  );

  const { count } = useSelector(
    (state: { Counter: CounterState }) => state.Counter,
  );

  const active = field === number;
  return (
    <div
      key={props.index + count}
      className={active ? 'field active' : 'field'}
    >
      {number}
    </div>
  );
};

export default Field;
