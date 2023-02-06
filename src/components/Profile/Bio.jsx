import React, {Component} from "react";

const  Bio = (props) => {
    return <div className="bio">
    <h2> {props.name} </h2>
    <strong> {props.tittle} </strong>
    </div>
}
export default Bio;