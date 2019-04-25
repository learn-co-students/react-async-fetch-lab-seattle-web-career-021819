import React from 'react';

export default class App extends React.Component {

  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      console.log(data.people)
      this.setState({
        people: data.people
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

}
