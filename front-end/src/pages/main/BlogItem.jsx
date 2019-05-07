import React from 'react';
import Navbar from '../../components/main-page/Navbar/Navbar';
import axios from 'axios';

class BlogItem extends React.Component {

    componentDidMount() {
        console.log(this.props);
        const pathname = this.props.location.pathname;
        const gameId = pathname.split('/')[pathname.split('/').length - 1];

        axios({
            url: `http://localhost:3001/api/posts/${gameId}`,
            method: 'get'
        }).then( (response) => {
            console.log(response.data);
        }).catch( (error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Navbar />

            </div>
        )
    }
}

export default BlogItem;