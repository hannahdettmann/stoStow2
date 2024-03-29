import React from 'react';
import { 
    AppBar, 
    Toolbar
} from '@material-ui/core'
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Home } from '@material-ui/icons';
import FaceSharpIcon from '@material-ui/icons/FaceSharp';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Nav = () => {
    return (
        <div>
            <header>
            <AppBar position="fixed" color="inherit">
                <Toolbar className="nav">
                    <Grid container spacing={2}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}>
                        <Link to="/">
                            <Home className="nav_icon fab" />
                        </Link>
                        </Grid>
                        <Grid item xs={2}>
                        <Link to="/search">
                            <SearchIcon className="nav_icon fab" />
                        </Link>
                        </Grid>
                        <Grid item xs={2}>
                        <Link to="/add">
                            <AddCircleOutlinedIcon className="nav_icon fab "/>
                        </Link>
                        </Grid>
                        <Grid item xs={2}>
                        <Link to="/report">
                            <HelpOutlinedIcon className="nav_icon fab" />
                        </Link>
                        </Grid>
                        <Grid item xs={2}>
                        <Link to="/login">
                            <FaceSharpIcon className="nav_icon fab" />
                        </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            </header>
        </div>
    )
}

export default Nav;