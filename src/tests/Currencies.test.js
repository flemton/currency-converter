import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import Currencies from '../components/Currencies';
import store from '../redux/store';

describe('currencies', () => {
  test('test if currencies renders', () => {
    const tree = render(
      <Provider store={store}>
        <Currencies />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
