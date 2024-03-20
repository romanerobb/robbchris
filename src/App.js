import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login/login';
import Footer from './components/footer/footer';

function App() {
  return (
<>
<BrowserRouter>
                    <Routes>
                        <Route exact path="" element={<Login />} />
                        <Route exact path="footer" element={<Footer />} />
                    </Routes>
            </BrowserRouter>
</>
  );
}

export default App;
