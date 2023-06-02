import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getCurrencies from './getCurrencies';
import { clearConverted, currency } from '../redux/stocks/currenciesSlice';

const Home = () => {
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
              <Link to="details" onClick={(() => { dispatch(clearConverted()); dispatch(currency(key)); })}>
                {`${key}`}
                :
                {`${value}`}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
