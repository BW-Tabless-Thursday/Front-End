import React, { useState, useEffect, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import api from "../../utils/api";
import TabEdit from "./TabEdit";
import { TabContext } from "../../contexts/TabContext";


const useStyles = makeStyles(theme => ({
    root: {
      width: '90%',
      marginLeft: '3%',
      marginRight: '3%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    imageDiv: {
      display: 'flex',
    },
    imageControl: {
      height: '120px',
      border: '1px solid lightGrey',
      justifyContent: 'flex-end',
      marginLeft: '3px',
      marginRight: '3px',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    right: {
      display: 'flex',

    },
    left: {

    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
    }
  }));
  
  export default function TabPreview(props) {
    const {tabs, setTabs, current_user} = useContext(TabContext);

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [editing, setEditing] = useState(false);
  
    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const editTab = () => {
        setEditing(true)
    }
        
    const handleDelete = (event) => {
        event.preventDefault()
        //insert the MODAL here?
        if (window.confirm(`Are you sure you want to delete ${props.tab.name} tab?`)) {
            
            api()
                .delete(`/tabs/${current_user}/${props.tab.id}`)
                .then((result) => {
                    setTabs(result.data.tabs)
                    console.log("Tab was deleted")
                })
                .catch((error) => {
                    console.log(error)
                    setTabs([...tabs, props.tab])
                })
        }
    }

    return (
        <div className={classes.root}>
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>{props.tab.name}</Typography>
              <Typography className={classes.secondaryHeading}><a href={props.tab.url} target="_blank" rel="noopener noreferrer">{props.tab.url}</a></Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.container}>
              <div className={classes.left}>
              <Typography><strong>Notes:</strong> {props.tab.notes}<br /><strong>Categories:</strong> {props.tab.category}</Typography>
              </div>

              <div className={classes.right}>
              <div className={classes.imageDiv}>
                <a href={props.tab.url} target="_blank" rel="noopener noreferrer">
                <img src ={`https://image.thum.io/get/${props.tab.url}/`} alt={`${props.tab.name}`} className={classes.imageControl}/></a>
              </div>
              <div className={classes.buttonContainer}>
              <button onClick={(e) => handleDelete(e)}>
                Delete
              </button>

              <button onClick={() => editTab()}>
                Edit
              </button>
              {editing &&
                <TabEdit  tab={props.tab} setEditing={setEditing}/>}
              </div>
                </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
          )
}