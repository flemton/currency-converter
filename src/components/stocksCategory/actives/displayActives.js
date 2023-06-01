import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getActiveStocks from './getActiveStocks';

const DisplayActives = () => {
  const stocks = useSelector((state) => state.stocks.actives);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveStocks());
  }, [dispatch]);
  return (
    <div>
      <h3>Actives</h3>
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

export default DisplayActives;
