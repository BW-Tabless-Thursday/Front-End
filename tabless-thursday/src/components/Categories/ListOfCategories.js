import React, { useState, useEffect, useContext } from "react";
import api from "../../utils/api";

import { CategoryContext } from "../../contexts/CategoryContext";
import { TabContext } from "../../contexts/TabContext";

import CategoryCard from "./Category";

import "./Category.css";

export default function ListOfCategories(){

    const {categories, setCategories} = useContext(CategoryContext);
    const { tabs, setTabs, current_user } = useContext(TabContext);

    
    function ShowCategories(event, id){
    // //     event.preventDefault();

    // //     api()
	// // 	  .get(`tabs/${current_user}`)
	// // 	  .then(response => {
    // //         console.log(response.data.tabs)
    //     //     // setCategories(categories.filter((category) => category.id === id))
    //         setTabs(tabs.filter((tab) =>  tab.category_id === id))
	// // 	  })
	// // 	  .catch(error => {
	// // 		console.log(error);
	// // 	  });

    }

    return(
        <div className="CategoriesList">

            {categories &&
                categories.map(category => (
                    <div onClick={(e) => ShowCategories(e, category.id)}>
                        <CategoryCard key={category.id} category={category}/>
                    </div>
            ))}

        </div>
    )
}