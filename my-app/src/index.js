import React, { Component } from 'react';
import {Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import LoginScreen from "./login/login";
import Navbar from "./components/Navbar";
import Signup from "./signup/signup"
import Questionnaire from "./questioner/questionnaire"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={ <App /> }></Route>
      <Route path="/login" element={<LoginScreen/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/questionnaire" element={<Questionnaire/>} win></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();