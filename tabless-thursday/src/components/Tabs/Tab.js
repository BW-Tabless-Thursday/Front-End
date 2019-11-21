import React, { useState, useEffect } from "react";
import api from "../../utils/api";

import TabEdit from "./TabEdit";

export default function TabPreview(props){
    
    const [editing, setEditing] = useState(false);

    const editTab = () => {
        setEditing(true)
    }

    const handleDelete = (event) => {
		event.preventDefault()

		if (window.confirm(`Are you sure you want to delete ${props.tab.name} tab?`)) {
			
			api()
				.delete(`/tabs/${props.tab.user_id}/${props.tab.id}`)
				.then((result) => {
                    // ДОБАВИТИ, КУДИ БУДЕ ПЕРЕХОДИТИ І ЩО БУДЕ ВИДНО
                    props.setTabs(result.data.tabs)
					console.log("Tab was deleted")
				})
				.catch((error) => {
					console.log(error)
					props.setTabs([...props.tabs, props.tab])
				})
		}
	}

    return(
        <div>
            <h3>{props.tab.name}</h3>
            <p>{props.tab.url}</p>
            <p>{props.tab.notes}</p>
            <p>{props.tab.category}</p>

            <button onClick={(e) => handleDelete(e)}>
				Delete
			</button>

            <button onClick={() => editTab()}>
				Edit
			</button>

            {editing &&
                <TabEdit tab={props.setTabs} setEditing={setEditing} tabs={props.tabs} setTabs={props.setTabs}/>}
        </div>
    )
}


// //**********expansion panels************* */
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles(theme => ({
//     root: {
//       width: '100%',
//     },
//     heading: {
//       fontSize: theme.typography.pxToRem(15),
//       flexBasis: '33.33%',
//       flexShrink: 0,
//     },
//     secondaryHeading: {
//       fontSize: theme.typography.pxToRem(15),
//       color: theme.palette.text.secondary,
//     },
//   }));
  
//   export default function ControlledExpansionPanels(props) {
//     const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);
  
//     const handleChange = panel => (event, isExpanded) => {
//       setExpanded(isExpanded ? panel : false);
//     };
//     return (
//         <div className={classes.root}>
//           <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//             <ExpansionPanelSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1bh-content"
//               id="panel1bh-header"
//             >
//               <Typography className={classes.heading}>{props.tab.name}</Typography>
//               <Typography className={classes.secondaryHeading}>{props.tab.url}</Typography>
//             </ExpansionPanelSummary>
//             <ExpansionPanelDetails>
//               <Typography>Notes: {props.tab.notes}<br />Categories: {props.tab.category}</Typography>
//               <div>
//               <img src ={`https://image.thum.io/get/${props.tab.url}/`} />
//               </div>
//             </ExpansionPanelDetails>
//           </ExpansionPanel>
//         </div>
//           )
// }
