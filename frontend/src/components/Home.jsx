import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>GUEST LIST</h1>
      <Link to="/create">
        <button className='Create'>Create new</button>
      </Link>
      <Link to="/all">
        <button className='All'>See all lists</button>
      </Link>
    </div>
  );
}

export default Home;
