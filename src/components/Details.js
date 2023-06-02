/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getConverted from './getConverted';
import { clearConverted } from '../redux/stocks/currenciesSlice';

const Details = () => {
  const converted = useSelector((state) => state.currencies);
  const dispatch = useDispatch();
  const [from, setFrom] = useState(converted.currency || '--');
  const [to, setTo] = useState('usd');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearConverted());
    dispatch(getConverted({ from: e.target.from.value, to: e.target.to.value }));
  };

  useEffect(() => {
    dispatch(clearConverted());
    dispatch(getConverted({ from, to: 'usd' }));
  }, [1]);

  const convertedA = converted.converted ? Object.entries(converted.converted) : [{ one: 'one', none: 'Check currencies' }, { from: '--', to: '--' }];
  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            From
            <input required type="text" id="from" name="from" onBlur={(e) => setFrom(e.target.value)} />
          </label>
          <label>
            To
            <input required type="text" id="to" name="to" onBlur={(e) => setTo(e.target.value)} />
          </label>
          <button type="submit">Convert</button>
        </form>
      </div>
      <h4>
        Date:
        {' '}
        {convertedA[0][1]}
      </h4>
      <p>
        1
        {' '}
        {from.toUpperCase()}
        {' equals '}
        {convertedA[1][1]}
        {' '}
        {to.toUpperCase()}
      </p>
    </div>
  );
};

export default Details;
