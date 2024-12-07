import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../src/components/authentication/login.jsx";
import SignUp from "../src/components/authentication/register.jsx";
import ProtectedRoute from "./components/authentication/ProtectedRoute.jsx";
import { AuthProvider } from "./components/authentication/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <div className="app">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <App />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  </StrictMode>
);
