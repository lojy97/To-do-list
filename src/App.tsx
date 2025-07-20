import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import AddEditTask from './Pages/add-edit';
import NotFound from './Pages/NotFound';
import Navbar from './components/Navbar';
import LoginPage from './Pages/login';
import ProtectedRoute from './components/protectedRoutes';
import './i18n';
import { useTranslation } from 'react-i18next';
function App() {
  const { t, i18n } = useTranslation();
  return (
    <Router>
       <Navbar />
      <div className="bg-pink-50 min-h-screen">
        
        <div className="max-w-5xl mx-auto py-12 px-6 text-pink-900">
          
          <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-8">
            🎀 {t('title')}
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
