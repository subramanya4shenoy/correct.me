import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackPage from "./Pages/FeedbackPage";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import Page404 from "./Pages/Page404";
import RegisterPage from "./Pages/RegisterPage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/feedback/:feedbackId" element={<FeedbackPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </Router>
    );
}