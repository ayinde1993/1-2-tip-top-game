/* eslint-disable */
import React from 'react';
import { Grid } from '@mui/material';
import Fade from '../Fade';

export const Item = (props) => {
  const { isFlex, flex, children, show, style, ...rest } = props;

  return (
    <Fade show={show}>
      {isFlex ? (
        <div
          style={{
            display: 'flex',
            ...style,
          }}
        >
          {children}
        </div>
      ) : (
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          {...rest}
        >
          {children}
        </Grid>
      )}
    </Fade>
  );
};

// Default props for Item
Item.defaultProps = {
  isFlex: false,
  show: undefined,
  style: undefined,
};

export default Item;
