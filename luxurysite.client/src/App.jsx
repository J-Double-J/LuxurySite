import { useEffect, useState } from 'react';
import './App.css';
import HeaderBar from './Components/HeaderBar';
import MainLayout from './Components/MainLayout';

function App() {
    return (
        <div>
            <HeaderBar />
            <MainLayout/>
        </div>
        );
}

export default App;