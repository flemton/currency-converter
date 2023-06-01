/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getConverted from './getConverted';
import { clearConverted } from '../redux/stocks/currenciesSlice';

const Details = ({ cfrom, cto }) => {
  const converted = useSelector((state) => state.currencies.converted);
  const dispatch = useDispatch();
  const [from, setFrom] = useState(cfrom);
  const [to, setTo] = useState(cto);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearConverted());
    dispatch(getConverted(e.target.from.value, e.target.to.value));
  };

  useEffect(() => {
    dispatch(clearConverted());
    dispatch(getConverted({ from, to }));
  }, [from, to, dispatch]);
  const convertedA = converted ? Object.entries(converted) : [{ none: 'none' }, { none: 'none' }];
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            From
            <input required type="text" id="from" name="from" onBlur={(e) => setFrom(e.target.value)} />
          </label>
          <label>
            To
            <input required type="text" id="to" name="to" onBlur={(e) => setTo(e.target.value)} />
          </label>
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
        {' '}
        {to.toUpperCase()}
        {' '}
        {convertedA[1][1]}
      </p>
    </div>
  );
};

export default Details;
