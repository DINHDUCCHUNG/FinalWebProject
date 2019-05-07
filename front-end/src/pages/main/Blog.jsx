import React from 'react';
import Navbar from '../../components/main-page/Navbar/Navbar';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import {withRouter} from 'react-router-dom';

class Blog extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios({
            url: 'http://localhost:3001/api/posts/all/count',
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

    handleClick = (id) => {
        this.props.history.push(`/blog/${id}`)
    }

    render() {
        let items = this.state.items.map((item) => {
            return (
                <div key={item._id} className="col-3">
                    <Card>
                        <CardImg top width="100%" src={item.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{item.title}</CardTitle>
                            <CardText>{item.content}</CardText>
                            <Button onClick={() => {this.handleClick(item._id)}} style={{height: "40px"}}>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        })
        return (
            <div>
                <Navbar />                
                <div className="container" style={{paddingTop: "80px"}}>
                    <div className="row">{items}</div>
                </div>   
            </div>
        )
    }
}

export default withRouter(Blog);