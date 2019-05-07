import React from 'react';
import axios from 'axios';
import Navbar from '../../components/main-page/Navbar/Navbar';
import DetailScreen from '../../components/main-page/ProductDetail/DetailScreen';

class ProductDetail extends React.Component {
    state = {
        item: {}
    }

    componentDidMount() {
        const pathname = this.props.location.pathname;
        const productId = pathname.split('/')[pathname.split('/').length - 1];

        axios({
            url: `http://localhost:3001/api/productions/${productId}`,
            method: 'get'
        }).then((response) => {
            this.setState({
                item: response.data
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div style={{paddingTop: '100px'}}>
                    <DetailScreen item={this.state.item}/>
                </div>
            </div>
        )
    }
}

export default ProductDetail;