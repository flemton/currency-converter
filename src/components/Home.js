import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getActiveStocks from './stocksCategory/actives/getActiveStocks';
import getStockList from './stocksCategory/list/getStockList';
import getForex from './getCurrencies';

const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveStocks());
    dispatch(getStockList());
    dispatch(getForex());
  }, [dispatch]);

  return (
    <div>
      <h2>Stocks</h2>
      <div>
        <Link to="stocks/actives">
          Actives (
          {stocks.actives?.length}
          )
        </Link>
      </div>
      <div>
        <Link to="stocks/list">
          List (
          {stocks.list?.length}
          )
        </Link>
      </div>
      <div>
        <Link to="forex">
          Forex (
          {stocks.forex?.length}
          )
        </Link>
      </div>
    </div>
  );
};

export default Home;
