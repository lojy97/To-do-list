import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import AddEditTask from './Pages/add-edit';
import NotFound from './Pages/NotFound';
import Navbar from './components/Navbar';
import LoginPage from './Pages/login';
import ProtectedRoute from './components/protectedRoutes';

function App() {
  return (
    <Router>
       <Navbar />
      <div className="bg-pink-50 min-h-screen">
        
        <div className="max-w-5xl mx-auto py-12 px-6 text-pink-900">
          
          <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-8">
            🎀 To-Do List
          </h1>

          <Routes>
  <Route path="/login" element={<LoginPage />} />
  <Route
    path="/"
    element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    }
  />
  <Route
    path="/addTask"
    element={
      <ProtectedRoute>
        <AddEditTask />
      </ProtectedRoute>
    }
  />
  <Route
    path="/editTask/:id"
    element={
      <ProtectedRoute>
        <AddEditTask />
      </ProtectedRoute>
    }
  />
  <Route path="*" element={<NotFound />} />
</Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
