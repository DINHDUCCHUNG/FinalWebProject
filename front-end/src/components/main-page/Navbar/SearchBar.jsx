import React from 'react';
import { withRouter} from 'react-router-dom'

class Searchbar extends React.Component {

    render() {
        return (
            <div className='col-2'>
                <input className='form-control-sm' placeholder='Search' />
            </div>
        )
    }
}

export default withRouter(Searchbar);