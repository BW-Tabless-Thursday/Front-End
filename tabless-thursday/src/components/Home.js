import React, { useState, useEffect } from "react";
import api from "../utils/api";

import { TabContext } from "../contexts/TabContext";
import { CategoryContext } from "../contexts/CategoryContext";

import ListOfCategories from "./Categories/ListOfCategories";
import ListOfTabs from "./Tabs/ListOfTabs";

export default function Home(){

    const [tabs, setTabs] = useState([]);
    const [categories, setCategories] = useState([]);

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
      
    useEffect(() => {
        api()
            .get("/tabs/categories")
            .then((result) => {
				console.log(result.data)
				setCategories(result.data)
				
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return(
        <CategoryContext.Provider value={{ categories, setCategories }} >
            <TabContext.Provider value={{ tabs, setTabs, current_user }}>
                <div>
                    <ListOfCategories />
                    <ListOfTabs/>
                </div>
            </TabContext.Provider>
        </CategoryContext.Provider>
    )
}