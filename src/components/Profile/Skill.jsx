import React, {Component} from "react";

const Skill =(props) =>{
    return <div className="skill">
    <h4>Skill</h4>
    <ul>
        <li> {props.skillA} </li>
        <li> {props.skillB}</li>
        <li> {props.skillC}</li>
    </ul>
</div>
}

export default Skill;