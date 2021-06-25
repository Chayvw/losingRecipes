import React, { useState } from 'react';
import axios from 'axios';


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

        const handleSubmit = (event)=>{
            event.preventDefault()
            // top three most difficult things to figure out
            axios.post("/api/ingredients", {name:ingredient, isVegetarian:checked}).then((response)=>{
                console.log(response.data);
                props.history.push("/ingredients")
            }).catch((err)=>{
                console.log(err)
            });

            // components get passed props from react router and they we can find history 

    }
    
    return (
        <div className="container">
            <div class="row">
                <form className="col s12" onSubmit={handleSubmit} >
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