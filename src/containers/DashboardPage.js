import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Dashboard from '../components/Dashboard/Dashboard';
import Footer from '../components/Layouts/Footer';

class DashboardPage extends Component {

    render() {
        return (
            <div>
               <Navbar />
               <Dashboard />
               <Footer />
            </div>
          
        );
    }
}

export default DashboardPage;