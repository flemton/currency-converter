import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCurrencies from './getCurrencies';

const DisplayCurrencies = () => {
  const currencies = useSelector((state) => state.currencies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  return (
    <div>
      <h3>Currencies</h3>
      {Object.entries(currencies.currencies)?.map(([key, value]) => (
        <div key={key}>
          <ul>
            <li>
              {`${key}`}
              :
              {`${value}`}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DisplayCurrencies;
