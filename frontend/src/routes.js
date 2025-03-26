import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Game from './containers/Game';
import Rules from './containers/Rules';
import Profile from './containers/Profile';
import Prize from './containers/Prize';
import Legalites from './containers/Legalites';

const routes = [
  <Route key="/" path="/" element={<Home />} />,
  <Route key="/about" path="/about" element={<About />} />,
  <Route key="/contact" path="/contact" element={<Contact />} />,
  <Route key="/game" path="/game" element={<Game />} />,
  <Route key="/rules" path="/rules" element={<Rules />} />,
  <Route key="/profile" path="/profile" element={<Profile />} />,
  <Route key="/prize" path="/prize" element={<Prize />} />,
  <Route key="/legalites" path="/legalites" element={<Legalites />} />,
];

export default routes;
