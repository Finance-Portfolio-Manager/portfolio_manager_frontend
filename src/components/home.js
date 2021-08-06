import React from 'react';
import Navigation from '../components/navigation/navigation'
import Footer from '../components/footer';

export default function Home() {
    return (
        <div className="container-fluid p-0 h-100">
            <Navigation />
            <div className="d-flex flex-column h-100">
            </div>
            <Footer />
        </div>
    );
}

