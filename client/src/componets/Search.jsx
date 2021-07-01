import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
// import { response } from 'express';

class Search extends Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
            results: []
        }

    }
    handleUserInput = (event) => {
        event.preventDefault();
        const query = this.state.userInput;
        const url = `https://api.edamam.com/search?q=${query}&app_id=c06c8ad2&app_key=02e54c7f11fc157d0fef77be1af9f2ef`
        axios({
            url: url,
            method: 'GET'
        }).then((response) => {
            console.log(response.data.hits[0].recipe)
            this.setState({
                results: response.data.hits[0].recipe

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
                        <input type="text" placeholder="Reciepe Search" value={this.state.userInput} onChange={(event) => { this.captureUserInput(event.target.value) }} />
                        <button onClick={this.handleUserInput}>Search</button>
                    </div>
                </div>
                {/* {this.state.results && this.state.results.map((result)=>{
                    return(
                        <div>
                            <h1>{result.source}</h1>
                        </div>
                    )

                })} */}
                <div className="row">
                    <div className="col s12 m6">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">{this.state.results.label}</span>

                                {/* <h5>{this.state.results.label}</h5> */}

                                <p>{this.state.results.source}</p>
                                <img src={this.state.results.image} />


                            </div>
                            <div class="card-action">
                                <ExternalLink href={this.state.results.url}>
                                    <span>Click to get Recipe</span>
                                </ExternalLink>
                            </div>
                        </div>

                        {/* {this.state.results.map((result)=>{
                            <div>
                                result
                            </div>
                        })} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;