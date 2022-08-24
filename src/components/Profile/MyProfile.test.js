import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import MyProfile from './MyProfile';
import store from '../../redux/configureStore';

describe('Tests for Profile Page', () => {
  test('renders correctly snapshot', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <MyProfile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
