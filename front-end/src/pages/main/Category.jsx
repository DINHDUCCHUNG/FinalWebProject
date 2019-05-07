import React from 'react';
import Navbar from '../../components/main-page/Navbar/Navbar';
import Axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

class Category extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {

        const pathname = this.props.location.pathname;
        const category = pathname.split('/')[pathname.split('/').length - 1];

        Axios({
            url: `http://localhost:3001/api/productions/all/count`,
            method: 'get'
        }).then((response) => {
            console.log(response.data);
            let items = response.data.filter( item => {return item.category === category});
            this.setState({
                items: items
            })
            console.log(this.state.items);
        }).catch((error) => {
            console.log(error);
        })
    }

    handleButtonClick = (itemId, itemCategory) => {
        this.props.history.push(`/Product/${itemCategory}/${itemId}`);
    }

    render() {
        let items = this.state.items.map( (item) => {
            return (
                <div key={item._id} className="col-3">
                    <Card>
                        <CardImg top width="100%" src={item.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{item.title}</CardTitle>
                            <CardText>{item.description}</CardText>
                            <Button onClick={() => {this.handleButtonClick(item._id, item.category)}}>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        })
        return(
            <div>
                <Navbar />
                <div className="container" style={{paddingTop: "80px"}}>
                    <div className="row">{items}</div>
                </div>
            </div>
        )
    }
}

export default Category;