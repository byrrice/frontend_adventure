import React, { Component } from 'react';
import './App.css';
import Filter from "./components/Filter.js"
import DataTable from "./components/DataTable.js"

//functional component would make it easier to communicate between sibling components
//what are the biggest obstacles in the coding challenge? one: passing state between all components and similarly related to that 2. making sure state is updated when sorted
class App extends Component {
  state = {
    people: [
      {
          name: "Veronica Mize",
          dob: "11/20/2011"
      },
      {
          name: "Peter Parker",
          dob: "01/16/1992" 
      },
      {
          name: "Ralph White",
          dob: "11/30/2011" 
      },
      {
          name: "Deborah T. Decker",
          dob: "10/31/1999" 
      },
      {
          name: "Janice Shroyer",
          dob: "12/01/1982" 
      },
      {
          name: "Alexander Alfred",
          dob: "02/09/1891" 
      },
      {
          name: "Cecilia Olsson",
          dob: "09/16/1992" 
      },
      {
          name: "Jimmy Shergil",
          dob: "12/12/2001" 
      },
    ]
  }

  changePeople = (people) => {
    this.setState({people: people})
  }
  
  render() { 
    return (
    <div className="App"> 
      <h1>Birthday Records</h1>
      <Filter people={this.state.people} changePeople={this.changePeople.bind(this)}></Filter>
      <DataTable people={this.state.people}></DataTable>
    </div>
    );
  }
}
export default App;
