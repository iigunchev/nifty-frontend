/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, prettyDOM, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// routing in test
import { MemoryRouter } from 'react-router-dom';
// provider for redux
import { Provider } from 'react-redux';
// component;
import SignUpForm from './SignUpForm';

// store redux
import store from '../../../redux/store';

test('Form renders', () => {
  const component = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/sign-up']}>
        <SignUpForm />
      </MemoryRouter>
    </Provider>
  );

  expect(component.container).toHaveTextContent('Sign up');
});

test('Submit form without inputs filled', async () => {
  const component = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/sign-up']}>
        <SignUpForm />
      </MemoryRouter>
    </Provider>
  );

  const user = userEvent.setup();

  const buttonSignUp = component.container.querySelector('.buttonSubmit');

  await user.click(buttonSignUp);
  await waitFor(() => {
    expect(component.container).toHaveTextContent(/first name is required/i);
    expect(component.container).toHaveTextContent(/last name is required/i);
    expect(component.container).toHaveTextContent(/email is required/i);
    expect(component.container).toHaveTextContent(/password required/i);
  });
});

test('submit form with input values', async () => {});
