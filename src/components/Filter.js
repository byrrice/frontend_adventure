import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Filter extends Component { 

  state = {
      nameChecked: false,
      ageChecked: false,
  };

  componentDidMount() {
    this.props.changePeople(this.props.people.sort((a,b) => a.name > b.name ? 1 : -1))
  }

  sort = name => event => {
    if (name === "nameChecked" && this.state.nameChecked === false) {
        this.props.changePeople(this.props.people.sort((a,b) => a.name > b.name ? 1 : -1))
        this.setState({ ageChecked: false });
    }
    if (name === "ageChecked" && this.state.ageChecked === false) {
        this.props.changePeople(this.props.people.sort(function(a, b){
            var date1 = a.dob.split('/').reverse().join(),
                date2 = b.dob.split('/').reverse().join();
            return date1 < date2 ? -1 : (date1 > date2 ? 1 : 0);
        }));
        this.setState({ nameChecked: false });
    }
    this.setState({ [name]: event.target.checked });
  };

  render() { 
    return (
    <div className="Filter"> 
      <FormGroup row style={{justifyContent:"center"}}>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.nameChecked}
              onChange={this.sort('nameChecked')}
              value="nameChecked"
            />
          }
          label="Name"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.ageChecked}
              onChange={this.sort('ageChecked')}
              value="ageChecked"
            />
          }
          label="Age"
        />
      </FormGroup>
    </div>
    );
  }
}
export default Filter;