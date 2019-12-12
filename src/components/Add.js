import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Dialog } from '@material-ui/core';
import AddForm from './AddForm';
import Nav from './Nav';

class Add extends Component {
    state = {
        open: false,
    }

    handleOpen(){
        this.setState({
            open: true
          });
    }

    handleClose(){
        this.setState({
            open: false
          });
    }

  render() {
    return (
      <div className="App-header">
          <Nav />
        <p> Add page </p>
        <Fab color="primary" aria-label="add" className="Fab" onClick={this.handleOpen.bind(this)}>
            <AddIcon />
        </Fab>
        <Dialog
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose.bind(this)}
      >
     <div className='add-form'>
       <AddForm />
     </div>
      </Dialog>
      </div>
    )
  }
}


export default (Add) 