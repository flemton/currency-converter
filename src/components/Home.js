import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getCurrencies from './getCurrencies';
import Details from './Details';

const Home = () => {
  const currencies = useSelector((state) => state.currencies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  return (
    <div>
      <h2>Currencies</h2>
      <div>
        <Link to="currencies">
          Currencies (
          {currencies.total}
          )
        </Link>
      </div>
      <div>
        <h3>Converter</h3>
        <Details cfrom="usd" cto="ghs" />
      </div>
    </div>
  );
};

export default Home;
