import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import KeywordPanel from './KeywordPanel';
import SitesPanel from './SitesPanel';
import SettingsPanel from './SettingsPanel'
import Grid from '@material-ui/core/Grid'

export default class Panel extends Component {
    state = {
        keywords:[

        ],
        sites:[

        ] 
    }


createdb = async() =>{
  await fetch('http://localhost:3005/createdb')
  var response = await fetch('http://localhost:3005/createdb')
  await this.createKeyWordsTable();
  await this.createSitesTable();
  await this.fetchKeywords();
  await this.fetchSites();
}


fetchSites = async() =>{
    var response = await fetch('http://localhost:3005/getsites')
    var sites = await response.json();
    if ((sites.length === 0)){
        await fetch('http://localhost:3005/addsites')
        var response = await fetch('http://localhost:3005/getsites')
        var sites = await response.json();
    }
    this.setState({sites:[...sites]})
    return(sites)
}

fetchKeywords = async() =>{
var response = await fetch('http://localhost:3005/getkwords')
var keywords = await response.json();
    if ((keywords.length === 0)){
        await fetch('http://localhost:3005/addkwords')
        var response = await fetch('http://localhost:3005/getkwords')
        var keywords = await response.json();
    }
this.setState({keywords:[...keywords]})
return(keywords)
}

createSitesTable = async() =>{
    const response = await fetch('http://localhost:3005/createsitestable')
}
createKeyWordsTable = async()=>{
    const response = await fetch('http://localhost:3005/createkeywordstable')
}

SaddKeyword = async(word)=>{
    const response = await fetch(`http://localhost:3005/addkword/${word}`)
}

SdelKeyWord = async(id)=>{
    const response = await fetch(`http://localhost:3005/deletekword/${id}`);
}

SaddSite = async(site)=>{
    const response = await fetch(`http://localhost:3005/addsite/${site}`)
}

SdelSite = async(id)=>{
    const response = await fetch(`http://localhost:3005/deletesite/${id}`);
}

    componentDidMount(){
        this.createdb();

    }

    addKeyword = (word) =>{
        const newKeyWord = {
          id: uuidv4(),
          word: word,
        }
        this.SaddKeyword(word);
        this.setState({
            keywords: [...this.state.keywords, newKeyWord]
        },()=>{
            console.log("added")
        });

      }


    addSite = (site) =>{
        const newSite = {
          id: uuidv4(),
          word: site,
        }
        this.SaddSite(site);
        this.setState({sites: [...this.state.sites, newSite]})
      }

    delKeyWord = (id) => {
      this.SdelKeyWord(id);
      this.setState({keywords: [...this.state.keywords.filter(word => word.id !== id)]});
    }

    delSite = (id) => {
        this.SdelSite(id);
        this.setState({sites: [...this.state.sites.filter(site => site.id !== id)]});
      }

    render() {
        return (
        <Grid container spacing = {1} >
            <Grid item xs = {4}>
                <KeywordPanel
                    addKeyword = {this.addKeyword}
                    keywords = {this.state.keywords}
                    delKeyWord = {this.delKeyWord}
                />
            </Grid>
            <Grid item xs = {4}>
                <SitesPanel
                    addSite = {this.addSite}
                    sites = {this.state.sites}
                    delSite = {this.delSite}/>
            </Grid>
            <Grid item xs = {4}>
                <SettingsPanel/>
            </Grid>
        </Grid>
        )
    }
}
