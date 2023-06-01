import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Details = (from, to) => {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(convert(from, to))
  }, [from, to])
  <div>Details</div>
};

export default Details;
