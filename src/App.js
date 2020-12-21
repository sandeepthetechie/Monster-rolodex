import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card_list/card-list.component.jsx';
import {SearchBox} from './components/search/search.components.jsx'


class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters:[],
      searchFeild : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  
  }



  render(){
    const {monsters,searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      )

    return (
            <div className="App">
              <h1> Monsters Rolodex</h1>
              <SearchBox
              placeholder='Search Monster'
              handleChange = {e => this.setState({searchFeild: e.target.value})} 

              
              />
        <CardList monsters = {filteredMonsters} />
      </div>
    );

  }
}

export default App;
