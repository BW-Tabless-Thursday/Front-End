//this is the main component where we will display the links created
//this will be a mapped array of objects like we normally work with.
//ListOfLinks will be set by Category selected
//You select a Category and it generates the ListOfLinks
//Show your list of individual links in an EXPANSION PANNEL
//please reference the material ui for this expansion pannel function 

import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import TabPreview from "./Tab";
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

	return (
		<div>
            <h3>My tabs</h3>
			<div>
				{tabs &&
					tabs.map(tab => (
                        <div>
                            {/* <h1>{tab.name}</h1> */}
                            <TabPreview key={tab.id} tab={tab}/>
                        </div>
				))}
			</div>
        </div>
	)
}