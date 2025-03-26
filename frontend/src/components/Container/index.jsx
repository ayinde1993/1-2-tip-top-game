/* eslint-disable */
import React from "react";
import { Grid } from "@mui/material";
import Fade from "../Fade";

// ContainerLayout Component
export const ContainerLayout = (props) => {
  const { show } = props;

  return (
    <Fade show={show}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        style={{ padding: "10px" }}
        {...props} // Spread other props
      />
    </Fade>
  );
};

// Default prop for show in ContainerLayout
ContainerLayout.defaultProps = {
  show: undefined,
};

// Container Component
export const Container = (props) => {
  const { show } = props;

  return (
    <Fade show={show}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        {...props} // Spread other props
      />
    </Fade>
  );
};

// Default prop for show in Container
Container.defaultProps = {
  show: undefined,
};

export default Container;
