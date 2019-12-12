import React, { Component } from 'react'
import { connect } from 'react-redux'
import StorageIcon from '@material-ui/icons/Storage';
import Grid from '@material-ui/core/Grid';
import { GoogleLogin} from 'react-google-oauth'

class Login extends Component {

  render() {

    const responseGoogle = (response) => {
    console.log(response);
  }
  
    return (
        <div className="App">
        <header className="App-header">
        <Grid container spacing={0}>
            <Grid item xs={12}>
            <h2>
                StoStorage
                </h2>
                <br />
            </Grid>
    
            <Grid item xs={12}>
                <StorageIcon className="big_icon"/>
            </Grid>
    
            <Grid item xs={12}>
                <br />
                <p>
                    a virtrual storage experience!
                </p>
                <br />
            </Grid>
            <Grid item xs={12}>
                <div>
                <GoogleLogin
                  clientId="810017428603-bfgilkcrc5iqmbdadj68nu371qltiaj3.apps.googleusercontent.com" 
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
      />
                  </div>
            </Grid>
          </Grid>
        </header>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Login) 
