import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Contact extends Component {
  state = {
      showContactInfo: false
  };

  onShowClick = e => {
      this.setState({showContactInfo: !this.state.showContactInfo})
   };
   
  onDeleteClick = async (id, dispatch) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({type: 'DELETE_CONTACT', payload: id});
    }
    catch(e) {
        dispatch({type: 'DELETE_CONTACT', payload: id});
    }   
  };


  render() {
    const {id,name,email,phone} = this.props.contact;
    const {showContactInfo} = this.state;
    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return (
                    <div className="card card-body mb-3">
                        <h4>{name} <i onClick={this.onShowClick} style={StyleSheet} className="fas fa-sort-down"></i>
                        <i onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{cursor:'pointer',float:'right',color: 'red'}} className="fas fa-times"></i>
                        <Link to={`contact/edit/${id}`}>
                            <i 
                              className="fas fa-pencil-alt"
                              style={{
                                  cursor: 'pointer',
                                  float: 'right',
                                  color: 'black',
                                  marginRight: '1rem'
                              }}
                            />
                        </Link>
                        </h4>
                        
                        {showContactInfo ? (
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Email:</strong>  {email}</li>
                                <li className="list-group-item"><strong>Phone:</strong>  {phone}</li>
                            </ul>
                        ) : null}  
                    </div>
                )
            }}
        </Consumer>
    )
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

const StyleSheet = {
    cursor: 'pointer',
    textSize: '50px'
}

export default Contact;
