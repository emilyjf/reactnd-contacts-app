import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class ContactList extends React.Component{
    render(){
        const people = this.props.contacts
        
        return <ol>
            {people.map((person) =>(
                <li key ={person.name}>{person.name}</li>
            ))}
        </ol>
    }
}

        
class App extends Component {
  render() {
    return (
      <div className="App">     
        <ContactList contacts={[
            {name: 'Emily'},
            {name: 'Tash'},
            {name: 'Lane'}
        ]}/>
        <ContactList contacts={[
            {name: 'Amanda'},
            {name: 'Mikenzi'},
            {name: 'Ryan'}
        ]}/>
      </div>
    );
  }
}

export default App;