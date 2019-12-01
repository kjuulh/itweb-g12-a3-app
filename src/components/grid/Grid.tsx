import React, { useEffect } from 'react';
import './Grid.scss';

export interface GridProps {
  rows: number;
  columns: number;
  currentField: number;
}

const Grid: React.FC<GridProps> = (props) => {
  const [fields, setFields] = React.useState();

  useEffect(() => {
    createFields();
  }, []);

  const createFields = () => {
    const f = [];

    let count = 0;
    for (let i = 0; i < props.columns; i++) {
      for (let j = 0; j < props.rows; j++) {
        count++;
        f.push(
          <div
            className={`col-` + (i + 1) + 'row-' + (j + 1) + ' field-' + count}
          >
            {count}
          </div>,
        );
      }
      setFields(f);
    }

    return f;
  };

  if (fields) {
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
            {fields.map(field => (
              field.
            ))}
          </div>
        }
      </div>
    );
  }
  return null;
};

export default Grid;
