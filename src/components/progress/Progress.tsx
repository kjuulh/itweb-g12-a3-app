import React, { useEffect } from 'react';
import './Progress.scss';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RequestState } from '../../library/reducers/request';
import { render } from 'react-dom';
import * as Request from '../../library/reducers/request';
import { ProgressBar } from './progress-bar/ProgressBar';
import { useHistory } from 'react-router';
import { timeout } from 'q';

export const Progress = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const request: RequestState = useSelector((state: any) => state.Request);

  const resetMessage = () => {
    setTimeout(() => {
      dispatch(Request.reset());
    }, 5000);
  };

  useEffect(() => {
    if (request.finished && request.success) {
      setTimeout(() => {
        history.push(request.redirect);
      }, 1000);
      resetMessage();
    } else if (request.finished && request.failed) {
      resetMessage();
    }
  }, [request.success]);

  const renderText = () => {
    return <p className='text'>{request.message}</p>;
  };

  const render = () => {
    if (request.requesting) {
      return (
        <div className='in-progress'>
          <ProgressBar />
        </div>
      );
    } else if (request.finished && !request.failed) {
      return <div className='finished'>{renderText()}</div>;
    } else if (request.failed) {
      return <div className='failed'>{renderText()}</div>;
    } else {
      return null;
    }
  };

  if (request.requesting || request.finished || request.failed) {
    return <div className='progress'>{render()}</div>;
  } else return null;
};
