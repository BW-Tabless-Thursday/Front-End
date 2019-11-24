import React, { useState, useEffect } from "react";
import api from "../../utils/api";

import TabPreview from "./Tab";
import CreateTabs from "./CreateTabs";

import ListOfCategories from "../Categories/ListOfCategories";

import 'typeface-roboto';

export default function ListOfTabs(props) {
	const [tabs, setTabs] = useState([])
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
            <h3>My tabs</h3>
			<div>
				{tabs &&
					tabs.map(tab => (
                        <div>
                            <h1>{tab.name}</h1>
                            <TabPreview key={tab.id} tab={tab} tabs={tabs} setTabs={setTabs} location={props.location}/>
                        </div>
				))}
			</div>
			<CreateTabs location={props.location} tabs={tabs} setTabs={setTabs} />
        </div>
	)
}