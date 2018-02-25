import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
    render() {
        return(
            <div>
				<h1>Page Not Found 404</h1>
				<p>Sorry, there is nothing to see here.</p>
				<p><Link to='/'>Back to Home</Link></p>
			</div>
        )
    }
}

export default NotFoundPage;