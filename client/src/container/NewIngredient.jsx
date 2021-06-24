import React from 'react';

function NewIngredient(props) {
    return (
        <div className="container">
            <div class="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s8">
                            <input id="name" type="text" />
                            <label htmlFor="email">Ingredient Name</label>
                        </div>
                    </div>
                </form>
                <div>
                    <label>
                        <input className="input-field col s8" type="checkbox" />
                        <span>Vegetarian?</span>
                    </label>
                </div>
                <div className="row">
                    <div className="col s4">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Add
    <i class="material-icons right">Ingredient</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NewIngredient;