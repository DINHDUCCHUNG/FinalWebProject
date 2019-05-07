import React from 'react';
import './Navbar.css';
import Searchbar from './SearchBar';
import ProductTab from './ProductTab';
import Post from './Post';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    handleTitleClick = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='navbar' id='navbar'>
                <div className='container'>
                    <div className='col'>
                        <button style={{textAlign:"left"}} className='title container-fluid' onClick={this.handleTitleClick}>Cosmetic Men</button>
                    </div>
                    <ProductTab />
                    <Post />
                    <div className='col-2 text-center'>
                        <button>About us</button>
                        <div className='highlight'></div>
                    </div>
                    <Searchbar/>
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar);