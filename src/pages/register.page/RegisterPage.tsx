import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './RegisterPage.scss';
import { useHistory } from 'react-router';
import { registerUser, RegisterState } from '../../library/reducers/register';
import { useDispatch, useSelector } from 'react-redux';

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(2, 'Your Username is too short'),
  email: Yup.string()
    .required('Email is required')
    .email('Your email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short'),
});

const RegisterPage = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  return (
    <div className='register-page'>
      <div className='container'>
        <div className='heading'>
          <h4 className='register-title'>Register</h4>
          <span className='register-close'>
            <span className='close-menu' onClick={() => history.goBack()}>
              <div className='close-icon-base'></div>
            </span>
          </span>
        </div>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            dispatch(
              registerUser(values.username, values.email, values.password),
            );
          }}
        >
          {({ touched, errors }) => (
            <Form className='register-form'>
              <div className='username'>
                <Field name='username' placeholder='Username' />
                {errors.username && touched.username ? (
                  <div className='error'>{errors.username}</div>
                ) : null}
              </div>
              <div className='email'>
                <Field name='email' type='email' placeholder='Email' />
                {errors.email && touched.email ? (
                  <div className='error'>{errors.email}</div>
                ) : null}
              </div>
              <div className='password'>
                <Field name='password' placeholder='Password' type='password' />
                {errors.password && touched.password ? (
                  <div className='error'>{errors.password}</div>
                ) : null}
              </div>
              <button type='submit'>REGISTER</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
