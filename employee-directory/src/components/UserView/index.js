/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
// import "./style.css";

class UserView extends Component {
    state = {
        searchResults: [],
        filteredResults: [],
        password: ""
      };
      render (props){
          return(
  
        <div>
          <div class="row">
            <div class="col user-images"><img src={props.user.picture.thumbnail} alt="User Photo" style= {{ width:"30%"}}></img></div>
            <div class="col"><p>{props.user.name.first} {props.user.name.last}</p></div>
            <div class="col"><p>{props.user.phone}</p></div>
            <div class="col"><p>{props.user.email}</p></div>
            <div class="col"><p>{props.user.dob.date.substring(0, 10)}</p></div>
          </div>
        </div>
          )
      };
    
    
}

export default UserView;