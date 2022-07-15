import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Header"
import Paragraph from './PPF';
import Footer from "./Footer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Paragraph />
    <Footer />
  </React.StrictMode>
);
