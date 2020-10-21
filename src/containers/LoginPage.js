import React, { Component } from 'react';
import Header from '../components/Layouts/Header';
import Login from '../components/Authentication/Login';
import Footer from '../components/Layouts/Footer';

class HomePage extends Component {

    render() {
        return (
            <div>
               <Header />
               <Login />
               <Footer />
            </div>
          
        );
    }
}

export default HomePage;