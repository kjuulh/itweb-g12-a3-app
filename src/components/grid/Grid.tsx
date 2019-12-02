import React, { useEffect } from 'react';
import './Grid.scss';
import Field from '../field/Field';

export interface GridProps {
  rows: number;
  columns: number;
}

const Grid: React.FC<GridProps> = (props) => {
  let fields: number[] = [];
  let count = 0;
  for (let i = 0; i < props.rows * props.columns; i++) {
    count++;
    fields.push(count);
  }

  const renderFields = () => {
    return fields.map((field, index) => {
      return <Field index={index} />;
    });
  };

  return (
    <div className='grid'>
      {
        <div
          className='container'
          style={{
            gridTemplateRows: `repeat(${props.rows}, 1fr)`,
            gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
          }}
        >
          {renderFields()}
        </div>
      }
    </div>
  );
};

export default Grid;
