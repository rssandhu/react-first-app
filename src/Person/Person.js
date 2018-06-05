import React from "react";
import './Person.css';
import Validation from '../ValidaterComponent/ValidaterComponent';

const person = (props) => {
    return     (
        <div className="Person">
            <p onClick={props.click}>I am a {props.name} , I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text"  onChange={props.changed} value={props.name}/>  <h2>{props.name.length}</h2>
            <Validation name={props.name.length} />
        </div>
    )
};
export default person;