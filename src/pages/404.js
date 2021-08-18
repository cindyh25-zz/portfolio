import * as React from 'react';
import { Link } from 'gatsby';
import { pageStyles } from '../constants/styles';
// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <p> Sorry, that page was not found :(</p>
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default NotFoundPage;
