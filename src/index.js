import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";


//create a class based component

class App extends React.Component {
    constructor(props){
        super(props);

        // we can define the Usestate 
        this.state = { lat: null , errorMessage: ''};
        
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => { this.setState({ errorMessage: err.message })}
        );
    }


    render() {
      
        if( this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage} </div>
        } 
        
        if (this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} />
            
        }
        
            return <Loading message="Accept the location request!" />
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
