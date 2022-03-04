import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import PostItem from './components/PostItem';
import Photos from './components/Photos';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="product/:id" element={<PostItem />} />
        <Route path="product" element={<Products />} />
        <Route path="posts" element={<Posts />} />
        <Route path="photos" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
