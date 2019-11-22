import React, { useState, useEffect } from "react";
import api from "../../utils/api";

export default function TabEdit(props) {

	const [categories, setCategories] = useState([]);
	const [tab, setTab] = useState({
		// "id" : props.tab.id,
		"url" : "",
        "name" : "",
		"notes" : "",
		"user_id": props.location.state,
		// "category_id": categories.id,
        // "category" : categories.category,	
    })

    
    
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
	
	// useEffect(() => {
    //     api()
	// 		.get(`tabs/${props.location.state}`)
    //         .then((result) => {
    //             console.log(result.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

	const handleChange = (event) => {
		setTab({
			...tab,
			[event.target.name]: event.target.value,
		})
    }

	const handleSubmit = (event, id) => {
		event.preventDefault()
		console.log(props.location.state)
		console.log(tab)

		api()
			.put(`tabs/${props.location.state}/${props.tab.id}`, tab)
			.then((result) => {
				props.setTabs(result.data.tabs)
				// props.history.push("/account")
				// props.setTabs([])
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<>
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
		</>
	)
}