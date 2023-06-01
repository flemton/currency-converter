import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getForex from './getCurrencies';

const DisplayForex = () => {
  const stocks = useSelector((state) => state.stocks.forex);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForex());
  }, [dispatch]);
  return (
    <div>
      <h3>List</h3>
      {stocks?.map((stock) => (
        <div key={stock.ticker}>
          <h3>{stock.ticker}</h3>
          <ul>
            <li>{stock.bid}</li>
            <li>{stock.ask}</li>
            <li>{stock.open}</li>
            <li>{stock.low}</li>
            <li>{stock.high}</li>
            <li>{stock.changes}</li>
            <li>{stock.date}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DisplayForex;
