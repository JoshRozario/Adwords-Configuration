import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
export default class RowItem extends Component {



render() {

    const { id, word,} = this.props.word;
    return (
      <Paper style = {useStyles.root}>
        <Grid container  >
            <Grid item style = {useStyles.gridRight} >
            <div className = 'task' > 
                {word}
                </div>
            </Grid>

            <Grid item   >
                    <Button
                        
                        style = {useStyles.iconButton}
                        variant="contained"
                        color= 'secondary'
                        startIcon={ <RemoveCircleOutlineIcon/>}
                        onClick = {this.props.delKeyWord.bind(this, id)}
                    >Clear</Button>
            </Grid>
        </Grid>

      </Paper>
    )
  }
}

const useStyles =  {
    
    root: {
        padding: '10px 10px',
        display: 'flex',
        alignItems: 'center',
        background: '#2e3c57',
        borderTop: '1px solid #3b5d7d',
        borderRadius : '0px',
        color: 'white'
    },
    iconButton: {
        textTransform: 'none',
        padding: '4px',
        border: '0.5px solid'
    },
    gridRight:{
        display: 'flex',
        flex: 200,
        alignItems: "center"
    }
    
}