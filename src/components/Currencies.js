import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getCurrencies from './getCurrencies';
import { clearConverted, currency } from '../redux/stocks/currenciesSlice';

const Currencies = () => {
  const { currencies, isLoading, fulfilled } = useSelector((state) => state.currencies);
  const dispatch = useDispatch();

  const filterByAlphaRange = (obj = [], start = 'a', end = 'z') => {
    const isGreater = (c1, c2) => c1 >= c2;
    const isSmaller = (c1, c2) => c1 <= c2;
    const filtered = obj.filter((letter) => {
      const [firstChar] = letter;
      return isGreater(firstChar, start) && isSmaller(firstChar, end);
    });
    return filtered;
  };

  const currenciesArray = Object.entries(currencies);
  const [cur, setCur] = useState(currenciesArray);
  useEffect(() => {
    dispatch(getCurrencies());
    setCur(filterByAlphaRange(currenciesArray, 'a', 'g'));
  }, [fulfilled]);

  if (isLoading) return <div>Loading.. </div>;

  return (
    <div>
      <h3>Currencies</h3>
      <div>
        <ul>
          <li><button type="button" onClick={() => setCur(filterByAlphaRange(currenciesArray, 'a', 'g'))}>A to F</button></li>
          <li><button type="button" onClick={() => setCur(filterByAlphaRange(currenciesArray, 'g', 'm'))}>G to L</button></li>
          <li><button type="button" onClick={() => setCur(filterByAlphaRange(currenciesArray, 'm', 's'))}>M to R</button></li>
          <li><button type="button" onClick={() => setCur(filterByAlphaRange(currenciesArray, 's', 'z'))}>S to Z</button></li>
        </ul>
      </div>
      {cur?.map((cur) => (
        <div key={cur[0]}>
          <ul>
            <li>
              <Link to="details" onClick={(() => { dispatch(clearConverted()); dispatch(currency(cur[0])); })}>
                {cur[0]}
                :
                {cur[1]}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Currencies;
