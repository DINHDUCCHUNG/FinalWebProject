import React from 'react';
import Navbar from '../../components/main-page/Navbar/Navbar';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

class Product extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        console.log(this.props);

        axios({
            url: `http://localhost:3001/api/productions/all/count`,
            method: 'get'
        }).then((response) => {
            console.log(response.data);
            this.setState({
                items: response.data
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    handleButtonClick = (itemId, itemCategory) => {
        this.props.history.push(`/Product/${itemCategory}/${itemId}`);
    }

    render() {
        let items = this.state.items.map((item) => {
            return (
                <div key={item._id} className="col-4">
                    <Card>
                        <CardImg top width="100%" src={item.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{item.title}</CardTitle>
                            <CardText>{item.description}</CardText>
                            <CardText>{item.prize}</CardText>
                            <Button style={{ height: "40px" }} onClick={() => { this.handleButtonClick(item._id, item.category) }}>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        })

        return (
            <div>
                <Navbar />
                <div className="container" style={{ paddingTop: "100px" }}>
                    <div className="row">
                        <div className="col-3" style={{ borderRight: "solid black 1px" }}>
                            <div>
                            <a href="http://localhost:3000/Product/IOPE">IOPE</a>
                            </div>
                            <div style={{marginTop: "30px"}}>
                            <a href="http://localhost:3000/Product/INNISFREE" >INNISFREE</a>
                            </div>
                            <div style={{marginTop: "30px"}}>
                            <a href="http://localhost:3000/Product/LANEIGE" >LANEIGE</a>
                            </div>
                        </div>
                        <div className="col-9 row">{items}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;