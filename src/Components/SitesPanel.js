import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';

import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment'
import DesktopWindowsOutlinedIcon from '@material-ui/icons/DesktopWindowsOutlined';





import Rows from './Rows';



export default class SitesPanel extends Component {


    state = {
        site: ''
    }


    add = e =>{

        e.preventDefault();
        this.props.addSite(this.state.site);
        console.log(this.state.site)
    };
    
    render() {
        return (
        <div>
            <h1 style = {{color: 'white',fontWeight: 200 }}><DesktopWindowsOutlinedIcon fontSize="large" style = {useStyles.IconHeader}/>Sites</h1>
            <Paper style = {useStyles.mainRoot}>
                    <TextField
                        style={useStyles.input}
                        placeholder="Enter your site here"
                        variant  = "outlined"
                        size="small"
                        onChange = {e=>{
                            this.setState({site: e.target.value})
                        }}
                        InputProps = {{
                            endAdornment : (
                            <InputAdornment position='end'>
                                <Button
                                    style = {useStyles.iconButton}
                                    variant="contained"
                                    
                                    startIcon={ <ControlPointIcon/>}
                                    onClick = {this.add}
                                >Add</Button>
                            </InputAdornment>
                            ),
                        }}
                    />
                    
                </Paper>
                <Rows row = {this.props.sites} delKeyWord = {this.props.delSite}/>

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
    backgroundColor: '#30BF60',
    color : '#fff',
    
  },
  IconHeader: {
    color: 'green',
    fontSize: 38,
    verticalAlign: 'text-bottom'
  },
}
