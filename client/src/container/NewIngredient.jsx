import React, { useState } from 'react';

function NewIngredient(props) {
    // define state thats going to hold the input value 
    const [ingredient, setIngredient] = useState("");

    // define state thats going to update the checkbox
    const [checked, setChecked] = useState(false);

    const handleInputChange= (event) => {
        // create the event handler that updates the states when the input value changes
        setIngredient(event.target.value)
    };

    const handleCheckBoxChange = () =>{
        setChecked(true);


    }

    

    
    return (
        <div className="container">
            <div class="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s8">
                            <input id="name" type="text" value={ingredient} onChange={handleInputChange} />
                            <label htmlFor="email">Ingredient Name</label>
                        </div>
                    </div>
                </form>
                <div>
                    <label>
                        <input className="input-field col s8" type="checkbox" onChange={handleCheckBoxChange}/>
                        <span>Vegetarian?</span>
                    </label>
                </div>
                <div className="row">
                    <div className="col s4">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Add
    <i className="material-icons right">Ingredient</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NewIngredient;