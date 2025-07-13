import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-pink-500 mb-4">
        404 🚫
      </h1>
      <p className="text-lg mb-6">Oops! The page you're looking for does not exist.</p>
      <Link
        to="/"
        className="text-pink-600 underline hover:text-pink-800"
      >
        ⬅️ Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
