import React from 'react';
import MyNav from './MyNav';

const Head = ({ page }) => {
  return (
    <>
      <title>Cindy Huang</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Libre+Franklin"
      ></link>
      <MyNav activePage={page} />
    </>
  );
};

export default Head;
