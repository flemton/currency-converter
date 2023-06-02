import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import Details from '../components/Details';
import store from '../redux/store';

describe('details', () => {
  test('test if details renders', () => {
    const tree = render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
