import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import PreviewPage from './pages/PreviewPage';
import { FormProvider } from './contexts/FormContext';

function App() {
  return (
    <FormProvider>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/preview" element={<PreviewPage />} />
        </Routes>
      </div>
    </FormProvider>
  );
}

export default App;