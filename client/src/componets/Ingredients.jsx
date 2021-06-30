import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { response } from 'express';

class Ingredients extends Component {
    // adding state for my ingredients and setting it to an empty array
    state = {
        ingredients: [],
        // deleteIngredient:false

    }
    // componentDidMount because this is a functional component
    componentDidMount() {
        this.getIngredients()

    };


    getIngredients = () => {
        axios.get("api/ingredients")
            .then((response) => {
                console.log(response.data)
                this.setState({
                    ingredients: response.data.data
                });
            }).catch((err) => { console.log(err) });
    }

    handleDelete = (id) => {
        console.log("handled")
        // took 7 hours to realize i should remove the semi colon in my route 
        axios.delete(`/api/ingredients/${id}`)
            .then((response) => {
                console.log("Call was made")
                console.log(response.data);
                this.getIngredients();
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
                                                    <h4>{ingredient.name}</h4>
                                                    <button className="waves-effect waves-light btn-small" onClick={() => { this.handleDelete(ingredient._id) }}> Delete</button>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}
                                <div className="container">
                                    <div className="row">
                                        <div className="col s6">
                                            <Link to='/newingredient'> <button className="waves-effect waves-light btn-large"> Add Ingredient</button></Link>
                                    
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col s6">
                                            <Link to='/search'> <button className="waves-effect waves-light btn-large"> Find Recipes </button></Link>


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