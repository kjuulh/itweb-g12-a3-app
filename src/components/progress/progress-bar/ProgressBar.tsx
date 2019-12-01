import React from 'react';
import './ProgressBar.scss';

export const ProgressBar = (props: {
  indeterminate?: boolean;
  query?: boolean;
  timed?: boolean;
  duration?: number;
  progress?: number;
}) => {
  const renderType = () => {
    if (props.indeterminate == true) {
      return <div className='indeterminate'></div>;
    } else if (props.indeterminate == false) {
      return (
        <div
          className='determinate'
          style={{ width: `${props.progress as number}%` }}
        ></div>
      );
    } else if (props.timed == true) {
      return (
        <div
          className='timed'
          style={{
            width: `${props.progress as number}%`,
            transition: `width ${props.duration}s linear`,
          }}
        ></div>
      );
    }

    return null;
  };

  return <div className='progress-bar'>{renderType()}</div>;
};

export default ProgressBar;
