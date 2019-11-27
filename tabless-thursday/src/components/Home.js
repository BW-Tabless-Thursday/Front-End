import React, { useState, useEffect } from "react";
import api from "../utils/api";

import { TabContext } from "../contexts/TabContext";

import ListOfCategories from "./Categories/ListOfCategories";
import ListOfTabs from "./Tabs/ListOfTabs";

export default function Home(props){

    const [tabs, setTabs] = useState([]);

    const current_user = localStorage.getItem("id");

    useEffect(() => {
        
		api()
		  .get(`tabs/${current_user}`)
		  .then(response => {
              console.log(response.data.tabs)
              console.log(current_user)
             
			setTabs(response.data.tabs);
		  })
		  .catch(error => {
			console.log(error);
		  });
	  }, [current_user]);

    return(
        <TabContext.Provider value={{ tabs, setTabs, current_user }}>
            <div>
                <ListOfCategories />
                <ListOfTabs/>
            </div>
        </TabContext.Provider>
    )
}