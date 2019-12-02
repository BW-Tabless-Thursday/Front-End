import React, { useState, useContext } from 'react';
import api from "../../utils/api";

import { TabContext } from "../../contexts/TabContext";

function CreateTabs() {

    const {tabs, setTabs, current_user} = useContext(TabContext);

    const [tab, setTab] = useState({
		id : "",
		url : "",
        name : "",
		notes : "",
		user_id: "",
		category_id: "",
        category : "",	
    })

    

    function handleSubmit(e){
        e.preventDefault();
        
        const addNewTab = {
            // "id": Date.now(),
            "url": tab.url,
            "name": tab.name,
            "notes": tab.notes,
            // "user_id": props.location.state,
            // "category_id": categories.id
            // "category": tab.category
        }

        api()
            .post(`/tabs/${current_user}`, addNewTab)
            .then(response => {
                console.log(response.data.tabs);
                setTabs([...tabs, addNewTab]);
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
                    type="url"
                    placeholder="URL"
                    name="url"
                    value={tab.url}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder="Notes"
                    name="notes"
                    value={tab.notes}
                    onChange={handleChange}
                />

                {/* <select 
                    name="category" 
                    value={tab.category} 
                    onChange={handleChange}>
                        {categories &&
                            categories.map(category =>
                                <option key={category.id} value={category.category} >{category.category}</option>
                        )}
                </select> */}

                <button type="submit">Add new Tab</button>
		    </form>
        </div>        
    )
}

export default CreateTabs;