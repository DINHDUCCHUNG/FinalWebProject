import React from "react";
import Axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container
} from "reactstrap";
import './Shop.css'
import config from "../../../config";

class Shop extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    const pathname = this.props.location.pathname;
    const category = pathname.split("/")[pathname.split("/").length - 1];
    console.log("category",category);

    Axios({
      url: `${config.baseUrl}/api/productions/`,
      method: "get"
    })
      .then(response => {
        let items = response.data.filter(item => {
          return item.category === category;
        });
        this.setState({
          items: items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleButtonClick = (itemId, itemCategory) => {
    this.props.history.push(`/home/product/${itemId}`);
  };

  render() {
    let items = this.state.items.map(item => {
      if(item.isPublic){
        return (
          <div key={item._id} className="col-3">
            <Card>
              <CardImg top height ="200" width="100" src={item.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.description}</CardText>
                <Button style={{width:"35%"}} className="detail" 
                  onClick={() => {
                    this.handleButtonClick(item._id, item.category);
                  }}
                >
                  Detail
                </Button>
              </CardBody>
            </Card>
          </div>
        );
      }
      return (
        <Container>
          <div><h3>Sản phẩm ngừng bán</h3></div>
        </Container>
      );
    });
    return (
      <div style={{marginBottom: "2%"}}>
        <div className="container" >
          <div className="row">{items}</div>
        </div>
      </div>
    );
  }
}

export default Shop;
