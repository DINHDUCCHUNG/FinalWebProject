import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer' style={{borderTop: "solid black 1px"}}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <h5>Store</h5>
                            <p>Find store</p>
                        </div>
                        <div className='col-3'>
                            <h5>Address</h5>
                            <p>106 Hoang Quoc Viet</p>
                            <p>13 Khuat Duy Tien </p>
                        </div>
                        <div className='col-3'>
                            <h5>Follow</h5>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                        </div>
                        <div className='col-3'>
                            <h5>About us</h5>
                            <p>History</p>
                            <p>New features</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer