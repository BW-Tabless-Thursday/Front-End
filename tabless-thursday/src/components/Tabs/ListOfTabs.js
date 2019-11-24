import React, { useState, useEffect } from "react";
import api from "../../utils/api";

import TabPreview from "./Tab";
import CreateTabs from "./CreateTabs";

import ListOfCategories from "../Categories/ListOfCategories";

import 'typeface-roboto';

export default function ListOfTabs(props) {
	const [tabs, setTabs] = useState([])
	let tabContainer = {
		backgroundColor : 'lightGrey',
		padding: '1%',
		marginTop: '2%',
	}
	let createTabContainer = {
		marginTop: '1%',
		marginLeft: '3%',
		marginRight: '2%',
	}
	useEffect(() => {
		api()
		  .get(`tabs/${props.location.state}`)
		  .then(response => {
              console.log(response.data.tabs)
             
			setTabs(response.data.tabs);
		  })
		  .catch(error => {
			console.log(error);
		  });
	  }, []);

	//   function addTab(e, tab){
    //     e.preventDefault();

    //     api()
	// 		.post(`/tabs/${props.location.state}`, tab)
	// 		.then(response => {
	// 			console.log(response.data.tabs);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
    // }

	return (
		<div>
			<ListOfCategories location={props.location} setTabs={setTabs} tabs={tabs}/>
			<div style={tabContainer}>
            <h3>My tabs</h3>
			<div>
				{tabs &&
					tabs.map(tab => (
                        <div>
                            {/* <h1>{tab.name}</h1> */}
                            <TabPreview key={tab.id} tab={tab} tabs={tabs} setTabs={setTabs} location={props.location}/>
                        </div>
				))}
			</div>
			<div style={createTabContainer}>
			<CreateTabs location={props.location} tabs={tabs} setTabs={setTabs} />
			</div>
			</div>
        </div>
	)
}