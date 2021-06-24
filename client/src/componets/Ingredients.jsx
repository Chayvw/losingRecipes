import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

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
            <div>
                <h3>Ingredients</h3>
                <div>
                    <div>
                     <Link to='/newingredient'> <button>Click to add new Ingredient</button></Link>  
                    </div>
                    {this.state.ingredients.map((ingredient) => {
                        return (
                            <div key={ingredient._id}>
                                <h3>{ingredient.name}</h3>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {/* if the length is 0 it will return no ingredients at this time */}
                    {this.state.ingredients.length === 0 && <p>No ingredients at the moment</p>}
                </div>
            </div >
        );
    }
}

export default Ingredients;