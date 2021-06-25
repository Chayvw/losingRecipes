import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Ingredients extends Component {
    // adding state for my ingredients and setting it to an empty array
    state = {
        ingredients: []
    }
    // componentDidMount because this is a functional component
    componentDidMount() {
        axios.get("api/ingredients")
            .then((response) => {
                console.log(response.data)
                this.setState({
                    ingredients: response.data.data
                });
            }).catch((err) => { console.log(err) });
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s4">
                        <h3>Ingredients:</h3>
                    </div >
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {this.state.ingredients.map((ingredient) => {
                                    return (
                                        <div key={ingredient._id} className="container">
                                            <div className="row">
                                                <div className="col s8">

                                                    <ul key={ingredient._id} className="collection-header">
                                                        {/* <li className="collection-header"><h4>Current Ingredients</h4></li> */}
                                                        <li class="collection-item">{ingredient.name}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="container">
                                    <div className="row">
                                        <div className="col s6">
                                            <Link to='/newingredient'> <button className="waves-effect waves-light btn-small">Click to add new Ingredient</button></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                {/* if the length is 0 it will return no ingredients at this time */}
                                {this.state.ingredients.length === 0 && <p>No ingredients at the moment</p>}
                            </div>
                        </div >
                    </div >
                </div >
            </div>
        );
    }
}

export default Ingredients;