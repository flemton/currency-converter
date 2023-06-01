import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getActiveStocks from './stocksCategory/actives/getActiveStocks';

const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveStocks());
  }, [dispatch]);

  return (
    <div>
      <h2>Stocks</h2>
      <Link to="stocks/actives">
        Actives (
        {stocks.actives.length}
        )
      </Link>
    </div>
  );
};

export default Home;
