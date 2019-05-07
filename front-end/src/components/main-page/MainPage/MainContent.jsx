import React from 'react';
import ControlledCarousel from './Carousel';
import './MainContent.css';
import Axios from 'axios';
import { Link } from 'react-router-dom'

class MainContent extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        console.log(this.props);

        Axios({
            url: `http://localhost:3001/api/productions/all/count`,
            method: 'get'
        }).then((response) => {
            console.log(response.data);
            let items = []
            for (let i = 0; i < 3; i++) {
                items.push(response.data[i]);
            }

            this.setState({
                items: items
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        let items = this.state.items.map((item) => {
            return (
                <Link to="" className="col-3" key={item._id}>
                    <div  >
                        <img src={item.image} />
                        <h6>{item.title}</h6>
                    </div>
                </Link>
            )
        })

        return (
            <div className='main-content' style={{ backgroundColor: "white", paddingTop: "70px" }}>
                <ControlledCarousel />
                <div className="container" style={{marginBottom: "20px"}}>
                    <div className="row text-center">
                        <div className="col-3">
                            <h2>For you</h2>
                            <button className="for-you" style={{border: "solid black 1px", height: "40px"}}>Learn more</button>
                        </div>
                        {items}
                    </div>
                </div>
                <div className="offer">
                    <img style={{ width: "100%", height: "400px" }} src="https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg" />
                    <h2>Discount 50% and more</h2>
                    <a href="">
                        <button className="offer-button">SEE MORE OFFERS</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default MainContent;