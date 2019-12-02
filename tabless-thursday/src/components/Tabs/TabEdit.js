import React, { useState, useContext } from "react";
import api from "../../utils/api";

import { TabContext } from "../../contexts/TabContext";
// import { CategoryContext } from "../../contexts/CategoryContext";

export default function TabEdit(props) {

	const {tabs, setTabs, current_user} = useContext(TabContext);
	// const { categories, setCategories } = useContext(CategoryContext);
	// console.log(categories)

	// const [categories, setCategories] = useState([]);
	const [tab, setTab] = useState({
		// "id" : props.tab.id,
		"url" : tabs.url,
        "name" : tabs.name,
		"notes" : tabs.notes,
		"user_id": current_user,
		// "category_id": categories.id,
        // "category" : "",	
    })

	

	const handleChange = (event) => {
		setTab({
			...tab,
			[event.target.name]: event.target.value,
		})
    }

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(current_user);
		console.log(tab);

		api()
			.put(`tabs/${current_user}/${props.tab.id}`, tab)
			.then((result) => {
				setTabs(result.data.tabs);
				props.setEditing(false)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<div>
			<h1>Edit Tab</h1>

			<form onSubmit={(e, id) => handleSubmit(e, id)}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={tab.name}
					onChange={handleChange}
				/>
				<input
					type="url"
					name="url"
					placeholder="URL"
					value={tab.url}
					onChange={handleChange}
				/>
                <input
					type="text"
					name="notes"
					placeholder="Notes"
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
                    
                
				<button type="submit">Save</button>
                <button onClick={() => props.setEditing(false)}>Cancel</button>
			</form>
		</div>
	)
}