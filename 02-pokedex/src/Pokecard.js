import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
    render(){
        const {name, type, exp, image} = this.props;
        let id = (image < 10) ? "00" + image : (image < 100) ? "0" + image : image ;
        return(
            <div className="Pokecard">
                <h2 className="Pokecard-name">{name}</h2>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} alt="" className="Pokecard-image"/>
                <p className="Pokecard-data">Type: {type}</p>
                <p className="Pokecard-data">EXP: {exp}</p>
            </div>
        )
    }
}

export default Pokecard;