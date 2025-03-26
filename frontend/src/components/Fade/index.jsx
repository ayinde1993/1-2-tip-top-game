/* eslint-disable */
import { Fade as FadeMUI } from '@mui/material';

export function Fade({ children, show = 'default' }) {
  // Handle the show prop, making sure to convert 'default' to `true` and 'none' to `false`
  const fadeIn = show === true || show === 'default'; // Treat 'default' as true
  const fadeOut = show === false || show === 'none'; // Treat 'none' as false

  // Render the component
  return fadeOut ? (
    <>{null}</> // If 'none' or false, render nothing
  ) : (
    <FadeMUI in={fadeIn}>{children}</FadeMUI> // Otherwise, apply the Fade component
  );
}

export default Fade;