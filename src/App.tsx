import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import { Monster } from './models/monster';

import './App.css';

class App extends React.Component {
  state: {
    monsters: Monster[];
    searchField: string;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        const monsters = users as Monster[];
        this.setState({ monsters });
      })
      .catch((error) => console.log(error));
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render(): React.ReactNode {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
