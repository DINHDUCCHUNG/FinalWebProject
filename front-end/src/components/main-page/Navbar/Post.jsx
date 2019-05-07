import React from 'react';
import { withRouter } from 'react-router-dom';

class Post extends React.Component {
    handleClick = () => {
        this.props.history.push('/blog');
    }

    render() {
        return (
            <div className='col-2  text-center'>
                <button className='container-fluid' onClick={this.handleClick}>Blog</button>
                <div className='highlight'></div>
            </div>
        )
    }
}

export default withRouter(Post);