import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import AddEditTask from './Pages/add-edit';

function App() {
  return (
    <Router>
      <div className="bg-pink-50 min-h-screen">
        <div className="max-w-5xl mx-auto py-12 px-6 text-pink-900">
          <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-8">
            🎀 To-Do List
          </h1>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addTask" element={<AddEditTask />} />
            <Route path="/editTask/:id" element={<AddEditTask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
