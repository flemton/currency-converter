import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getActiveStocks from './getActiveStocks';

const DisplayStocks = () => {
  const stocks = useSelector((state) => state.stocks.stocks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveStocks());
  }, [dispatch]);
  return (
    <div>
      {stocks?.map((stock) => (
        <div key={stock.ticker}>
          <h3>{stock.companyName}</h3>
          <ul>
            <li>{stock.changes}</li>
            <li>{stock.price}</li>
            <li>{stock.changesPercentage}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DisplayStocks;
