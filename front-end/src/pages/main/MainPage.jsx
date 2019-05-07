import React from 'react';
import Navbar from '../../components/main-page/Navbar/Navbar';
import MainContent from '../../components/main-page/MainPage/MainContent';
import Footer from '../../components/main-page/Footer/Footer';

class MainPage extends React.Component {
    render() {
        return (
            <div className='main-page'>
                <Navbar />
                <MainContent />
                <Footer />
            </div>
        )
    }
}

export default MainPage;