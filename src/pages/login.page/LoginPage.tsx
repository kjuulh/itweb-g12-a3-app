import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './LoginPage.scss';
import { Router, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../library/reducers/login';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(2, 'Your Username is too short'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short'),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className='login-page'>
      <div className='container'>
        <div className='heading'>
          <h4 className='login-title'>Login</h4>
          <span className='login-close'>
            <span className='close-menu' onClick={() => history.goBack()}>
              <div className='close-icon-base'></div>
            </span>
          </span>
        </div>
        <div className='login-errors'></div>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            dispatch(login(values.username, values.password));
          }}
        >
          {({ touched, errors }) => (
            <Form className='login-form'>
              <div className='username'>
                <Field name='username' placeholder='Username' />
                {errors.username && touched.username ? (
                  <div className='error'>{errors.username}</div>
                ) : null}
              </div>
              <div className='password'>
                <Field name='password' placeholder='Password' type='password' />
                {errors.password && touched.password ? (
                  <div className='error'>{errors.password}</div>
                ) : null}
              </div>
              <button type='submit'>LOGIN</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
