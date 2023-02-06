import React, {Component} from "react";
import './profile.style.css'

import Bio from './Bio'
import Skill from './Skill'
import Social from './Social'
            
class Profile extends Component{
    bio = {
        name: 'Md Faruque Hossain',
        tittle: 'Fond-End Devloper'
    };
    skill = {
        skillA: "JavaScript",
        skillB: "Java",
        skillC: "Python"
    };
    social = {
        facebook: 'Facebook',
        twitter: 'Twitter',
        linkedIn: 'LinkedIn',
        gitHub: 'GitHub'
    };
    
    render(){
        return <div className="container">
            <Bio name={this.bio.name} tittle = {this.bio.tittle} />
            <Skill skillA={this.skill.skillA} skillB={this.skill.skillB} skillC= {this.skill.skillC} />
            <Social facebook= {this.social.facebook} twitter = {this.social.twitter} linkedIn = {this.social.linkedIn} gitHub = {this.social.gitHub}  />
        </div>
    }
}

export default Profile