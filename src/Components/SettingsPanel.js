import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';


export default class SettingsPanel extends Component {

    state = {
            timers:{
                target1: 40 , target2:55, visit1: 1 , visit2: 30, visit3: 50, operation1:5, operation2:10, found1:10, found2:20, automatic:1 
            },
            Chrome:false, FireFox:false,Explorer:true, Safari: false, Opera: false, Incognito:true,

            visitPage: false,

            dReset:false, vReset:false, pReset:true, mData:true, fMode:false,
            

            rCookies:true, cReso:false, mTracks:false, dsMode:true, ranGen:false, aProtection:true, rHistory:false

            
    };

    increment = (name) =>{
        this.setState((prevState) => {
            prevState.timers[name] = prevState.timers[name] + 1;
            return prevState
        });
    }

    

    decrement = (name) =>{
        this.setState((prevState) => {
            prevState.timers[name] = prevState.timers[name] - 1;
            return prevState;
        });
    }

    handleChange = name => event => {
        this.setState({ ...this.state, [name]: event.target.checked });
    };

    onStart = () =>{
        console.log("Start button has been pressed")
        console.log(this.state)
    }
    onExport = () =>{
        console.log("Export button has been pressed")
        console.log(this.state)
    }
    onStop = () =>{
        console.log("Stop button has been pressed")
    }

    render() {
        return (
        <div>
        {/*browser checkboxes*/}
        <h1 style = {{color: 'white',fontWeight: 200 }}><SettingsOutlinedIcon style = {useStyles.IconHeader}/>Settings</h1>
            <Paper style = {useStyles.mainRoot}>
                <FormGroup row style = {useStyles.check}>
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Chrome"
                        checked = {this.state.Chrome}
                        onClick={this.handleChange('Chrome')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="FireFox"
                        checked = {this.state.FireFox}
                        onClick={this.handleChange('FireFox')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Explorer"
                        checked = {this.state.Explorer}
                        onClick={this.handleChange('Explorer')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Safari"
                        checked = {this.state.Safari}
                        onClick={this.handleChange('Safari')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Opera"
                        checked = {this.state.Opera}
                        onClick={this.handleChange('Opera')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Incognito"
                        checked = {this.state.Incognito}
                        onClick={this.handleChange('Incognito')}
                    />
                </FormGroup>
            </Paper>
            

             {/*Wait target website timers*/}
            <Paper style = {useStyles.mainRoot}>
                <p style = {useStyles.rightPad}> Wait </p>
                <ButtonGroup size="small" aria-label="small outlined button group" style = {useStyles.rightPad}>
                <Button disabled style = {useStyles.button}>{this.state.timers.target1}</Button>
                <Grid container direction = "column" alignItems = "center">
                    <Grid item><Button style = {useStyles.button}  onClick = {() => this.increment('target1')}>+</Button></Grid>
                    <Grid item> <Button style = {useStyles.button}  onClick = {() => this.decrement('target1')}>-</Button></Grid>
                </Grid>
                </ButtonGroup>
                <ButtonGroup size="small" aria-label="small outlined button group" >
                <Button disabled style = {useStyles.button}>{this.state.timers.target2}</Button>
                <Grid container direction = "column" alignItems = "center" >
                    <Grid item><Button style = {useStyles.button} onClick = {() => this.increment('target2')}>+</Button></Grid>
                    <Grid item> <Button style = {useStyles.button}  onClick = {() => this.decrement('target2')}>-</Button></Grid>
                </Grid>
                </ButtonGroup>
                <p style = {useStyles.leftPad}> seconds on the targeted website </p>
            </Paper>

            {/*Visit page within site checkbox*/}
            <Paper style = {useStyles.mainRoot}>
            <FormGroup row style = {useStyles.check}>
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}
                        checked = {this.state.visitPage}
                        onClick={this.handleChange('visitPage')                        
                        }/>
                        
                        }
                        label=" visit the Page within the Site"
                    />
            </FormGroup>
            </Paper>


             {/*second pages visit timers*/}                
            <Paper style = {useStyles.mainRoot}>
            <ButtonGroup size="small" aria-label="small outlined button group" >
                <Button disabled style = {useStyles.button}>{this.state.timers.visit1}</Button>
                <Grid container direction = "column" alignItems = "center" >
                    <Grid item><Button style = {useStyles.button} onClick = {() => this.increment('visit1')}>+</Button></Grid>
                    <Grid item> <Button style = {useStyles.button} onClick = {() => this.decrement('visit1')}>-</Button></Grid>
                </Grid>
                </ButtonGroup>
                <p style = {useStyles.leftPad}> pages </p>
                <ButtonGroup size="small" aria-label="small outlined button group" style = {useStyles.leftPad}>
                <Button disabled style = {useStyles.button}>{this.state.timers.visit2}</Button>
                <Grid container direction = "column" alignItems = "center" >
                    <Grid item><Button style = {useStyles.button} onClick = {() => this.increment('visit2')}>+</Button></Grid>
                    <Grid item> <Button style = {useStyles.button} onClick = {() => this.decrement('visit2')} >-</Button></Grid>
                </Grid>
                </ButtonGroup>
                <ButtonGroup size="small" aria-label="small outlined button group" style = {useStyles.leftPad} >
                <Button disabled style = {useStyles.button}>{this.state.timers.visit3}</Button>
                <Grid container direction = "column" alignItems = "center" >
                    <Grid item><Button style = {useStyles.button} onClick = {() => this.increment('visit3')}>+</Button></Grid>
                    <Grid item> <Button style = {useStyles.button} onClick = {() => this.decrement('visit3')}>-</Button></Grid>
                </Grid>
                </ButtonGroup>
                <p style = {useStyles.leftPad}> visit from to second </p>
            </Paper>

             {/*After operation timers*/}
            <Paper style = {useStyles.mainRoot}>
                <p style = {useStyles.rightPad}> After the operation is complete </p>
                <ButtonGroup size="small" aria-label="small outlined button group" >
                <Button disabled style = {useStyles.button}>{this.state.timers.operation1}</Button>
                <Grid container direction = "column" alignItems = "center" >
                    <Grid item><Button style = {useStyles.button} onClick = {() => this.increment('operation1')} >+</Button></Grid>
                    <Grid item> <Button style = {useStyles.button} onClick = {() => this.decrement('operation1')}>-</Button></Grid>
                </Grid>
                </ButtonGroup>
                <ButtonGroup size="small" aria-label="small outlined button group" style = {useStyles.leftPad}>
                <Button disabled style = {useStyles.button}>{this.state.timers.operation2}</Button>
                <Grid container direction = "column" alignItems = "center" >
                    <Grid item><Button style = {useStyles.button} onClick = {() => this.increment('operation2')}>+</Button></Grid>
                    <Grid item> <Button style = {useStyles.button}  onClick = {() => this.decrement('operation2')}>-</Button></Grid>
                </Grid>
                </ButtonGroup>
                <p style = {useStyles.leftPad}> seconds wait </p>
            </Paper>

             {/*Target site timers*/}
            <Paper style = {useStyles.mainRoot}>
                <p style = {useStyles.rightPad}> Target site </p>
                <ButtonGroup size="small" aria-label="small outlined button group" >
                <Button disabled style = {useStyles.button}>{this.state.timers.found1}</Button>
                <Grid container direction = "column" alignItems = "center" >
                    <Grid item><Button style = {useStyles.button}  onClick = {() => this.increment('found1')}>+</Button></Grid>
                    <Grid item> <Button style = {useStyles.button} onClick = {() => this.decrement('found1')}>-</Button></Grid>
                </Grid>
                </ButtonGroup>
                <p style = {useStyles.leftPad}> if not found times </p>
                <ButtonGroup size="small" aria-label="small outlined button group" >
                <Button disabled style = {useStyles.button}>{this.state.timers.found2}</Button>
                <Grid container direction = "column" alignItems = "center" >
                    <Grid item><Button style = {useStyles.button}  onClick = {() => this.increment('found2')}>+</Button></Grid>
                    <Grid item> <Button style = {useStyles.button}  onClick = {() => this.decrement('found2')}>-</Button></Grid>
                </Grid>
                </ButtonGroup>
                <p style = {useStyles.leftPad}> minutes wait </p>
            </Paper>

             {/*Automatic reset timers*/}
            <Paper style = {useStyles.mainRoot}>
            <ButtonGroup size="small" aria-label="small outlined button group" >
                <Button disabled style = {useStyles.button}>{this.state.timers.automatic}</Button>
                <Grid container direction = "column" alignItems = "center" >
                    <Grid item><Button style = {useStyles.button} onClick = {() => this.increment('automatic')}>+</Button></Grid>
                    <Grid item> <Button style = {useStyles.button} onClick = {() => this.decrement('automatic')}>-</Button></Grid>
                </Grid>
                </ButtonGroup>
                <p style = {useStyles.leftPad}> automatic reset after operation </p>
            </Paper>

             {/*Reset Mobile data and fly mode checboxes*/}
            <Paper style = {useStyles.mainRoot}>
                <FormGroup row style = {useStyles.check}>
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Device Reset"
                        checked = {this.state.dReset}
                        onClick={this.handleChange('dReset')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Vinn Reset"
                        checked = {this.state.vReset}
                        onClick={this.handleChange('vReset')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Phone Reset"
                        checked = {this.state.pReset}
                        onClick={this.handleChange('pReset')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Mobile Data"
                        checked = {this.state.mData}
                        onClick={this.handleChange('mData')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Fly Mode"
                        checked = {this.state.fMode}
                        onClick={this.handleChange('fMode')}
                    />
                </FormGroup>
            </Paper>

             {/*More settings checboxes*/}
            <Paper style = {useStyles.mainRoot}>
                <FormGroup row style = {useStyles.check}>
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Remove Cookies"
                        checked = {this.state.rCookies}
                        onClick={this.handleChange('rCookies')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Change Resolution"
                        checked = {this.state.cReso}
                        onClick={this.handleChange('cReso')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Mouse Tracks"
                        checked = {this.state.mTracks}
                        onClick={this.handleChange('mTracks')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Data Saving Mode"
                        checked = {this.state.dsMode}
                        onClick={this.handleChange('dsMode')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Random Generate"
                        checked = {this.state.ranGen}
                        onClick={this.handleChange('ranGen')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Analytics Protection"
                        checked = {this.state.aProtection}
                        onClick={this.handleChange('aProtection')}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox style = {useStyles.check}/>
                        }
                        label="Remove History"
                        checked = {this.state.rHistory}
                        onClick={this.handleChange('rHistory')}
                    />

                </FormGroup>
            </Paper>

             {/**/}
            <Paper style = {useStyles.root}>
                <Grid container direction = "row" spacing = {3}>
                    <Grid item>  
                        <Button
                            style = {useStyles.buttonG}
                            variant="contained"
                            onClick={() => this.onExport()}
                        >EXPORT REPORT</Button>
                    </Grid>
                    <Grid item>  
                    <Button
                        style = {useStyles.buttonB}
                        variant="contained"
                        onClick={() => this.onStop()}
                    >STOP</Button>
                    </Grid>
                    <Grid item>  
                    <Button
                        style = {useStyles.iconButton}
                        variant="contained"
                        onClick={() => this.onStart()}
                    >START</Button>
                    </Grid>
                </Grid>
            </Paper>
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
        borderRadius: '0px',
        color : '#fff'
    },
    root: {
        padding: '10px 10px',
        display: 'flex',
        alignItems: 'center',
        background: '#2e3c57',
        borderTop: "",
        borderRadius: '0px',
        color : '#fff'
    },

    button:{
        color: '#fff',
        border: '1px solid #5872a7',
        borderRadius: '0px',
        padding : '0px',
 
    },
    check:{
        color: '#fff',
        fontSize: '10px'
    },
    rightPad:{
        paddingRight: '10px'
    },
    leftPad:{
        paddingLeft: '10px'
    },

    iconButton: {
        display: 'flex',
        textTransform: 'none',
        backgroundColor: '#30BF60',
        color : '#fff',
    },
    IconHeader: {
        color: '#FFC500',
        fontSize: 38,
        verticalAlign: 'text-bottom'
      },

    buttonG:{
        fontWeight: '700',
        display: 'flex',
        textTransform: 'none',
        backgroundColor: '#30BF60',
        color : '#fff',
        backgroundColor :  '#FFA500',
    },

    buttonB:{
        fontWeight: '600',
        display: 'flex',
        textTransform: 'none',
        backgroundColor: '#0095ff',
        color : '#fff',
    }
  

}    