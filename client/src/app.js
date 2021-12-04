import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import FeedbackPage from './Pages/FeedbackPage';
import GiveFeedback from './Pages/GiveFeedback';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import Page404 from './Pages/Page404';

export default function App() {
  return (
    <DocumentTitle title='Correct Me'>
      <Router>
        <Routes>
          <Route path='/feedback' element={<FeedbackPage />} />
          <Route path='/feedback/:feedbackId' element={<FeedbackPage />} />
          <Route path='/gf/:feedbackId' element={<GiveFeedback />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </DocumentTitle>
  );
}
