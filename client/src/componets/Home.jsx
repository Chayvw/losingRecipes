import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Welcome</h2>
                        <Link to='/ingredients'><button className="btn waves-effect waves-light">Ingredients</button></Link>
                        <Link to='/ingredients'><button className="btn waves-effect waves-light"> New Ingredients</button></Link>
                    </div>
                    {/* <div className="container">
                <div className="row">
                    <div className="col"></div>
                        <Link to='/ingredients'><button className="btn waves-effect waves-light"> New Ingredients</button></Link>
                    </div>
                </div> */}

            </div>
            </div>
            </>


        );
    }
}

export default Home;