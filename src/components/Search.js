import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Nav from './Nav';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


class Search extends Component {
  state = {
    searchString: '',
    activeItems: Object.keys(this.props.items),
    activeCategories: [],
  }
  
  render() {    
    const { items, categories } = this.props

    const updateCategory = (e, cat) => {
      console.log('cat', cat)
      console.log(e.target.value)
      if(cat in this.state.activeCategories){
        this.setState({
          activeCategories: this.state.activeCategories.filter((c) => {
            c !== cat
          })
        })
        
      } else {
        this.setState({
          activeCategories: [...this.state.activeCategories, cat]
        })
      }
    };

    function updateSearch(e){
      if(e === ''){
        this.setState({
          activeItems: Object.keys(items)
        })
        return
      }
      console.log('update search: ', e.target.value)
      this.setState({
        searchString: e.target.value
      })
      console.log('update state: ', this.state.searchString)
      if (e.target.value === '') {
        this.setState({
          activeItems: Object.keys(items)
        })
      }
      else {
        let matchItems = Object.keys(items).filter((item) => {
          let itemName = items[item].name
          return itemName.indexOf(
            (e.target.value).split(' ').join('')) !== -1
        })

        matchItems.filter((item) => {
          return (items[item].categories in this.state.activeCategories)
        })

        this.setState({
          activeItems: matchItems
        })
    }
  }
  

    function renderRow() {
      return (
        this.state.activeItems.map((id) =>
          <ListItem button key={id}>
            <ListItemText primary={items[id].name} />
            <IconButton edge="end" className="icon-button" aria-label="comments">
                <InfoIcon />
              </IconButton>
          </ListItem>
        ));
    }
    return (
      
      <div>
      <Nav />
      <div className="App-header">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">
          <br />
          <Grid item style={{marginTop:"75px"}}>
            <p>Search: &ensp;</p>
          </Grid>
            <Grid item style={{marginTop:"75px"}}>
            <TextField
            id="standard-basic"
            value={this.state.searchString}
            onChange={updateSearch.bind(this)}
          />
          </Grid>
          </Grid>
          <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">
            <Grid item>
              <p>Categories: </p>
            </Grid>
            </Grid>
            <Grid container 
                  direction="row"
                  justify="center"
                  alignItems="center">
                <Grid item xs={10}>
              <ToggleButtonGroup 
              value={this.state.activeCategories} 
              onChange={updateCategory.bind(this)} 
              arial-label="text formatting">
                {Object.values(categories).map((category) => (
                    <ToggleButton
                      className='tg-button'
                      key={category}
                      value={category}
                      name={{category}} 
                    >
                  <CheckIcon />
                  <p>{category}</p>
                </ToggleButton>
                
                  ))}
                </ToggleButtonGroup>
                    
                  
          </Grid>
          </Grid>
          <Grid container 
                  direction="column"
                  justify="center"
                  alignItems="center">
          <Grid item xs={12}>
          <p>Items: </p>
          </Grid>
          <Grid item>
          <FixedSizeList height={200} width={350} itemSize={46} itemCount={1}>
            {renderRow.bind(this)}
          </FixedSizeList>
          </Grid>
        </Grid>
      </div>
      </div>
    )
  }
}

function mapStateToProps({ items, categories }) {
  return {
    items,
    categories,
  }
}



export default connect(mapStateToProps)(Search) 