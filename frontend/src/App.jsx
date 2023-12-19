import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';

function Home() {
  return (
    <div>
      <h1>GUEST LIST</h1>
      <Link to="/create">
        <button className='Create'>Create new</button>
      </Link>
      <Link to="/all">
        <button className='All'>See all list's</button>
      </Link>
    </div>
  );
}

function CreatePage() {
  return (
    <div>
      <h1>Create Page</h1>
    </div>
  );
}

function AllListPage() {
  return (
    <div>
      <h1>All Lists Page</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/all" element={<AllListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
