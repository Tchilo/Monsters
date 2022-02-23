import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-box/search-box.component';

class App extends React.Component {
  constructor(props) {
    super(props)
this.state = {
  monsters: [],
  search: ''
}
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = (e) => {
    this.setState({search:e.target.value})
  }

  render(){
  const {monsters, search} = this.state;
  const filtered = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBar placeholder='monster search'
      handleChange={this.handleChange}
      />
   <CardList  monsters={filtered}/>
    </div>
  );
  }
}

export default App;
