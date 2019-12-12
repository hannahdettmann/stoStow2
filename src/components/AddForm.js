import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import LinearProgress from '@material-ui/core/LinearProgress';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


class AddForm extends Component {
  state = {
    completed: 5,
    location: '',
    count: 0,
    flammable : false,
    description : '',
}

  increaseProgress = () => {
    this.setState((state) => ({
      completed: this.state.completed + 10 > 100 ? 100 : this.state.completed + 10
    }))
  }

  decreaseProgress = () => {
    this.setState((state) => ({
      completed: this.state.completed - 10 < 0 ? 0 : this.state.completed - 10 
    }))
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }
        
  render() {
    
    return (
      <div className="add-form">
        <Grid container>
          <Grid item xs={12}>
          <h1>Add an Item</h1>
          <LinearProgress variant="determinate" value={this.state.completed} color="secondary" />
          </Grid>
            {this.state.completed === 5 ?
             <Grid container direction="row" justify="space-between" alignItems="center">
             <Grid item xs={1}>
             <IconButton aria-label="add" color="secondary">
                 <NavigateBeforeIcon className="fab" onClick={this.decreaseProgress}/>
             </IconButton>
             </Grid>
              <Grid item xs={6}>
                 <p>Description: &ensp;
              <Input
                    id="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  /></p>
                  
         
            <p>Count: &ensp;
              <Input
                    id="count"
                    value={this.state.count}
                    onChange={this.handleChange}
                  /></p>
              </Grid> 
            <Grid item xs={1}>
            <IconButton aria-label="add" color="secondary" 
            disabled={this.state.description === '' && this.state.count === 0}
            onClick={this.increaseProgress}>
                <NavigateNextIcon className="fab" />
            </IconButton> 
              </Grid> 
              </Grid>
              :
              <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item xs={1}>
              <IconButton aria-label="add" color="secondary">
                  <NavigateBeforeIcon className="fab" onClick={this.decreaseProgress}/>
              </IconButton>
              </Grid>
              <Grid item xs={6}>
                 <p>Is this flammable?: &ensp;</p>
            <ToggleButtonGroup>
              <ToggleButton value={this.state.flammable === true}>
              Yes
              </ToggleButton>
              <ToggleButton value={this.state.flammable === false}>
                No
              </ToggleButton>
            </ToggleButtonGroup>
              </Grid> 
            <Grid item xs={1}>
            <IconButton aria-label="add" color="secondary" 
            onClick={this.increaseProgress}>
                <NavigateNextIcon className="fab" />
            </IconButton> 
              </Grid> 
              </Grid>
            }
        </Grid> 
      </div>
    )
  }
}

export default (AddForm);
