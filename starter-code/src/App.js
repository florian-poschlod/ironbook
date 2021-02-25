import React from 'react';
import logo from './logo.svg';
import './App.css';
import users from './users.json'

class App extends React.Component {

  state = {
    ironhackers: users
  }

  render() {
    console.log(this.state.ironhackers)

    const hackerList = this.state.ironhackers.map((hacker, index) => {
      return (
        <tr key={index}>
          <td>{hacker.firstName}</td>
          <td>{hacker.lastName}</td>
          <td>{hacker.campus}</td>
          <td>{hacker.role}</td>
          <td><a href={hacker.linkedin}>{hacker.linkedin && '-> LinkedIn'}</a></td>
        </tr>
      )
    })

    return (  

      <div className="App">
        <h1>Ironbook</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {hackerList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
