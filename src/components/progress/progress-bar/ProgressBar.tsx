import React from 'react';
import './ProgressBar.scss';

export const ProgressBar = (props: {
  indeterminate?: boolean;
  query?: boolean;
  progress?: number;
}) => {
  return (
    <div className='progress-bar'>
      {(!props.indeterminate as boolean) ? (
        <div className='indeterminate'></div>
      ) : (
        <div
          className='determinate'
          style={{ width: props.progress as number }}
        ></div>
      )}
    </div>
  );
};

export default ProgressBar;
