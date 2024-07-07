import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SalarySelection from './components/SalarySelection';
import StepperForm from './components/StepperForm';
import ConfirmationPage from './components/ConfirmationPage';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();
  let progress = 0;

  switch (location.pathname) {
    case '/':
      progress = 33;
      break;
    case '/form':
      progress = 66;
      break;
    case '/confirmation':
      progress = 100;
      break;
    default:
      progress = 0;
  }

  return (
    <div style={{ backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
      <Navbar />
      <ProgressBar progress={progress} />
      <Routes>
        <Route path="/" element={<SalarySelection />} />
        <Route path="/form" element={<StepperForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </div>
  );
};

export default App;
