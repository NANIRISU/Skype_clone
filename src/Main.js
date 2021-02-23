import React from 'react';
import './Main.css'
import MainPage from './componets/dashboard/MainPage';
import SidePage from './componets/dashboard/SidePage';

export default function Main() {
  return (
    <div className="main-container">
        <SidePage />
        <MainPage />
    </div>
  );
}
