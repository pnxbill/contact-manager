import React, { Component } from 'react'

export default class Test extends Component { //will run after component is loaded
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({
        name: data[0].name,
        email: data[0].email
    })) 
  }

  state = {
      name: '',
      email: ''
  }

 /* componentWillMount () {
      console.log('Before mount...');  // will run before component is loaded
  }

  componentDidUpdate () {
      console.log('update after state changes')   //will run after a state update
  }

  componentWillUpdate () {
      console.log('update before state changes')  //will run before state changes
  }

  componentWillReceiveProps (nextProps, nextState) {
    console.log('will be depracated')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
      return {
          test: 'something'
      }
  }*/

  render() {
    const {name,email} = this.state;
    return (
      <div>
        <h1><span className="text-danger">Test</span> component</h1>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    )
  }
}
