import React from 'react';
import axios from 'axios';
import DetailScreen from './DetailScreen';
import config from "../../../config";

class ProductDetail extends React.Component {
    state = {
        item: {}
    }

    componentDidMount() {
        const pathname = this.props.location.pathname;
        const productId = pathname.split('/')[pathname.split('/').length - 1];

        axios({
            url: `${config.baseUrl}/api/productions/${productId}`,
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
                <div style={{paddingTop: '100px'}}>
                    <DetailScreen item={this.state.item}/>
                </div>
            </div>
        )
    }
}

export default ProductDetail;