import React, { useState, useEffect } from "react";
import api from "../../utils/api";

import CategoryCard from "./Category";

import "./Category.css";

export default function ListOfCategories(props){

    const [categories, setCategories] = useState([]);

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
    
    function ShowCategories(event, id){
        event.preventDefault();

        api()
		  .get(`tabs/${props.location.state}`)
		  .then(response => {
            console.log(response.data.tabs)
            // setCategories(categories.filter((category) => category.id === id))
            props.setTabs(props.tabs.filter((tab) => tab.category_id === id))
		  })
		  .catch(error => {
			console.log(error);
		  });

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