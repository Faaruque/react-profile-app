import React, {Component} from "react";

const Social = (props) =>{
    return <div className="links">
    <h4>Social </h4>
    <ul>
        <li><a href="#"> {props.facebook} </a></li>
        <li><a href="#"> {props.twitter} </a></li>
        <li><a href="#"> {props.linkedIn} </a></li>
        <li><a href="#"> {props.gitHub} </a></li>
    </ul>
</div>
}

export default Social;