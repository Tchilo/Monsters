import React from 'react';
import CardList from './components/card-list/card-list.component';

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
  
  render(){
  const {monsters, search} = this.state;
  const filtered = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="App">
      <input onChange={e => this.setState({search:e.target.value})} type='search' placeholder='monster search'/>
   <CardList  monsters={filtered}/>
    </div>
  );
  }
}

export default App;
