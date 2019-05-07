import React from 'react';
import Navbar from '../../components/main-page/Navbar/Navbar';
import { Form, Button } from 'reactstrap';
import Axios from 'axios';

class BuyScreen extends React.Component {
    state = {
        email: '',
        fullName: '',
        address: '',
        phone: '',
        order: {
            production: '',
            bill: 0
        }
    }

    componentDidMount() {
        console.log(this.props);
        const pathname = this.props.location.pathname.split('/');
        const productId = pathname[pathname.length - 1];

        Axios({
            url: `http://localhost:3001/api/productions/${productId}`,
            method: 'get'
        }).then((response) => {
            console.log(response.data)
            this.setState({
                order: {
                    production: response.data.title,
                    bill: response.data.prize
                }
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    handleInputChange = (type, input) => {
        if (type === "email") {
            this.setState({
                email: input
            })
        }

        if (type === "fullName") {
            this.setState({
                fullName: input
            })
        }

        if (type === "address") {
            this.setState({
                address: input
            })
        }

        if (type === "phone") {
            this.setState({
                phone: input
            })
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        Axios({
            url: "http://localhost:3001/api/customer/",
            method: "post",
            data: {
                email: this.state.email,
                fullName: this.state.fullName,
                address: this.state.address,
                phone: this.state.phone,
                order: {
                    production: this.state.order.production,
                    bill: this.state.order.bill
                }
            }
        }).then(
            console.log("success")
        ).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container" style={{ paddingTop: "100px" }}>
                    <div className="row">
                        <Form onSubmit={this.handleSubmit} className="col-6">
                            <div className="form-group">
                                <label>Full Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" onChange={(event) => { this.handleInputChange("fullName", event.target.value) }} placeholder="Enter full name" />
                            </div>

                            <div className="form-group">
                                <label>Email <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" onChange={(event) => { this.handleInputChange("email", event.target.value) }} placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Phone Number <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" onChange={(event) => { this.handleInputChange("phone", event.target.value) }} placeholder="Enter phone number" />
                            </div>

                            <div className="form-group">
                                <label>Address <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" onChange={(event) => { this.handleInputChange("address", event.target.value) }} placeholder="Enter address" />
                            </div>
                            <Button style={{ marginLeft: "20px", height: "40px" }}>Buy</Button>
                        </Form>
                        <div className="col-6 text-center">
                            <img />
                            <h3>{this.state.order.production}</h3>
                            <h3>{this.state.order.bill}$</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyScreen;