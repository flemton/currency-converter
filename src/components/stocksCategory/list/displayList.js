import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getStockList from './getStockList';

const DisplayList = () => {
  const stocks = useSelector((state) => state.stocks.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStockList());
  }, [dispatch]);
  return (
    <div>
      <h3>List</h3>
      {stocks?.map((stock) => (
        <div key={stock.symbol}>
          <h3>{stock.name}</h3>
          <ul>
            <li>{stock.symbol}</li>
            <li>{stock.price}</li>
            <li>{stock.exchange}</li>
            <li>{stock.exchangeShortName}</li>
            <li>{stock.type}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DisplayList;
