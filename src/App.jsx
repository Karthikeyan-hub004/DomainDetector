import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DomainDetail from './pages/DomainDetail';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/domain/:id" element={<DomainDetail />} />
                    </Routes>
                </main>
                <footer className="footer">
                    <div className="container">
                        <p>© 2024 Domain Detector. Build your future.</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
