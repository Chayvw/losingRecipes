import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { response } from 'express';

class Search extends Component {
    constructor(){
        super()

        this.state={
            userInput: "",
            results: ""
        }

        }
        handleUserInput = (event) =>{
            event.preventDefault();
            const query = this.state.userInput;
            const url = `https://api.edamam.com/search?q=${query}&app_id=c06c8ad2&app_key=02e54c7f11fc157d0fef77be1af9f2ef`
            axios({
                url:url,
                method:'GET'
            }).then((response)=>{
                console.log(response)
                this.setState({
                    results: response

                })
                
            })
        }

        captureUserInput = (input) => {
            this.setState({
                userInput: input
            }, () => { console.log(input) })
        


    }
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col s6">
                    <Link to='/'> <button className="waves-effect waves-light btn-large">Home</button></Link>
            
               <h1>Search Page</h1> 
               <input type="text"  placeholder="Reciepe Search" value={this.state.userInput} onChange={(event) => { this.captureUserInput(event.target.value) }} />
               <button onClick={this.handleUserInput}>Search</button>
            </div>
            </div>
            </div>
        );
    }
}

export default Search;