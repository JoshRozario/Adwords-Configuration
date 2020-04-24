import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';

import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment'
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';



import Rows from './Rows';



export default class KeywordPanel extends Component {


    state = {
        keyword: ''
    }


    add = e =>{
        e.preventDefault();
        this.props.addKeyword(this.state.keyword);
    };
    
    render() {
        return (
        <div>
        <h1 style = {{color: 'white',fontWeight: 200 }}><LabelOutlinedIcon style = {useStyles.IconHeader}/>Keywords</h1>
        {/* <AppBar position = "static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                    Photos
                    </Typography>
                </Toolbar>
            </AppBar>
        */}
            <Paper style = {useStyles.mainRoot}>
                    <TextField
                        style={useStyles.input}
                        placeholder="Enter your keywords here"
                        variant  = "outlined"
                        size="small"
                        onChange = {e=>{
                            this.setState({keyword: e.target.value})
                        }}
                        InputProps = {{
                            endAdornment : (
                            <InputAdornment position='end'>
                                <Button
                                    style = {useStyles.iconButton}
                                    variant="contained"
                                    color= 'primary'
                                    startIcon={ <ControlPointIcon/>}
                                    onClick = {this.add}
                                >Add</Button>
                            </InputAdornment>
                            ),
                        }}
                    />
                     
                </Paper>
                <Rows row = {this.props.keywords} delKeyWord = {this.props.delKeyWord}/>

        </div>
        )
    }
}


const useStyles =  {

mainRoot: {
    padding: '10px 10px',
    display: 'flex',
    alignItems: 'center',
    background: '#2e3c57',
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '0px'
    
},

  root: {
    padding: '10px 10px',
    display: 'flex',
    alignItems: 'center',
    background: '#2e3c57',
    borderTop: '1px solid #727E94',
    
  },
  input: {
    flex: 1,
    background: 'white',
    borderRadius: 0,
    
  },
  iconButton: {
    display: 'flex',
    textTransform: 'none',
    
  },
  IconHeader: {
    color: '#0095ff',
    fontSize: 38,
    verticalAlign: 'text-bottom'
  },


}
