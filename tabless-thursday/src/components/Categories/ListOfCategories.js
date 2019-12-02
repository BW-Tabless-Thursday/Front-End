import React, { useState, useEffect, useContext } from "react";
import api from "../../utils/api";

import { CategoryContext } from "../../contexts/CategoryContext";
import { TabContext } from "../../contexts/TabContext";

import CategoryCard from "./Category";
import TabPreview from "../Tabs/Tab";

import "./Category.css";

export default function ListOfCategories(){

    const [categories, setCategories] = useState([]);
    const {tabs} = useContext(TabContext);

    useEffect(() => {
        api()
            .get("/tabs/categories")
            .then((result) => {
				console.log(result.data);
				setCategories(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    console.log(categories);
    
    function ShowCategories(event){
        event.preventDefault();
        console.log(tabs);
        // tabs.map(tab => {
        //     if (tab.category_id === categories.id){
        //         return <TabPreview key={tab.id} tab={tab}/>
        // }})
    }

    return(
        <CategoryContext.Provider value={{ categories, setCategories }} >
            <div className="CategoriesList">
                {categories &&
                    categories.map(category => (
                        <div onClick={(e) => ShowCategories(e)}>
                            <CategoryCard key={category.id} category={category}/>
                        </div>
                ))}
            </div>
        </CategoryContext.Provider>
    )
}