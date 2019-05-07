import React from 'react';
import './DetailScreen.css';
import { withRouter } from 'react-router-dom';

class DetailScreen extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    handleBuyButtonClick = () => {
        console.log(this.props.history);
        this.props.history.push(`Buy/${this.props.item._id}`);
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <img className='col-6' style={{height: '400px'}} src={this.props.item.image} alt='card' />
                    <div className='col-6 text-center'>
                        <h3>{this.props.item.title}</h3>
                        <h4>{this.props.item.description}</h4>
                        <h4>{this.props.item.prize}$</h4>
                        <button style={{height: "40px"}} onClick={this.handleBuyButtonClick}>Buy</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(DetailScreen);