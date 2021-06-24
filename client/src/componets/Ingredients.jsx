import React, { Component } from 'react';
import axios from 'axios';

class Ingredients extends Component {
    // componentDidMount because this is a functional component
    componentDidMount() {
        axios.get("api/ingredients")
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => { console.log(err) })
    }


    render() {
        return (
            <div>
                <h3>Ingredients</h3>
            </div>
        );
    }
}

export default Ingredients;