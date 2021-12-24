import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
    render(){
        const {name, type, exp, image} = this.props;
        return(
            <div className="Pokecard">
                <p className="Pokecard-name">{name}</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${image}.png`} alt=""/>
                <p>Type: {type}</p>
                <p>EXP: {exp}</p>
            </div>
        )
    }
}

export default Pokecard;