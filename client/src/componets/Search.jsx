import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Search extends Component {
    render() {
        return (
            
            <div className="container">
                                    <div className="row">
                                        <div className="col s6">
                                            <Link to='/'> <button className="waves-effect waves-light btn-large">Home</button></Link>
                                    
                                        </div>
                                    </div>
                                </div>
        );
    }
}

export default Search;