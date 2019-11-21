//Form Element for creating the tab that will be saved.
//This form will show up in a modal
//Tab Title will serve as visual -- User Typed
//Tab Link will be the copy and pasted link
//Tab Notes will be reminder text user input
//Category : where you can select or input a category for organization
//submit button

import React, { useState, useEffect } from 'react';
import api from "../../utils/api";

function CreateTabs(props) {

    const [tab, setTab] = useState({
		id : "",
		url : "",
        name : "",
		notes : "",
		user_id: "",
		category_id: "",
        category : "",	
    })

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api()
            .get("/tabs/categories")
            .then((result) => {
                setCategories(result.data)
                console.log(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    function handleSubmit(e){
        e.preventDefault();
        
        const addNewTab = {
            // "id": Date.now(),
            "url": tab.url,
            "name": tab.name,
            "notes": tab.notes,
            // "user_id": props.location.state,
            "category_id": categories.id
            // "category": tab.category
        }

        api()
        .post(`/tabs/${props.location.state}`, addNewTab)
        .then(response => {
            console.log(response.data.tabs);
            props.setTabs([...props.tabs, addNewTab])
            setTab({
                id : "",
                url : "",
                name : "",
                notes : "",
                user_id: "",
                category_id: "",
                category : "",
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleChange = (event) => {
		setTab({
			...tab,
			[event.target.name]: event.target.value,
		})
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
					type="text"
					name="name"
					placeholder="Name"
					value={tab.name}
					onChange={handleChange}
				/>

                <input 
                    type="text"
                    placeholder="Notes"
                    name="notes"
                    value={tab.notes}
                    onChange={handleChange}
                />

                <input 
                    type="url"
                    placeholder="URL"
                    name="url"
                    value={tab.url}
                    onChange={handleChange}
                />

                <select 
                    name="category" 
                    value={tab.category} 
                    onChange={handleChange}>
                        {categories &&
                            categories.map(category =>
                                <option value={category.category} >{category.category}</option>
                        )}
                </select>

                <button type="submit">Add new Tab</button>
		    </form>
        </div>        
    )
}

export default CreateTabs;
