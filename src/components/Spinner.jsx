import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Spinner = () => {
  return (
    <div>
      <CircularProgress style={{margin: "4vh"}} />
    </div>
  );
};

export default Spinner;