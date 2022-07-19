import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import DarkMode from './pages/DarkMode';
import ColorRenderer from './pages/ColorRenderer';
import Form from './pages/Forms';
import Dogs from './pages/Dogs';
import Score from './pages/Score';
import WindowEvent from './pages/WindowEvent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="ColorRenderer" element={<ColorRenderer />}/>
    <Route path="DarkMode" element={<DarkMode />}/>
    <Route path="Form" element={<Form />}/>
    <Route path="Dogs" element={<Dogs />}/>
    <Route path="Score" element={<Score />}/>
    <Route path="WindowEvent" element={<WindowEvent />}/>
  </Routes>
</BrowserRouter>
);

