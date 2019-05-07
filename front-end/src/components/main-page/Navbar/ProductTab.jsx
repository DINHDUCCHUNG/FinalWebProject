import React from 'react';
import './ProductTab.css';
import { withRouter, Link } from 'react-router-dom';

class ProductTab extends React.Component {
    handleClick = () => {
        this.props.history.push('/Product');
    }

    render() {
        return (
            <div id="product" className="col-2 text-center">
                <button className="container-fluid" onClick={this.handleClick}>Product</button>
                <div className="dropdown-content">
                    <div className='highlight'></div>
                    {/* <Link to='/Product/IOPE'>IOPE</Link>
                    <Link to='/Product/INNISFREE'>INNISFREE</Link>
                    <Link to='/Product/LANEIGE'>LANEIGE</Link> */}
                    <a href="http://localhost:3000/Product/IOPE">IOPE</a>
                    <a href="http://localhost:3000/Product/INNISFREE">INNISFREE</a>
                    <a href="http://localhost:3000/Product/LANEIGE">LANEIGE</a>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductTab);