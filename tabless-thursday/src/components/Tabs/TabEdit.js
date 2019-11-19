import React, { useState, useEffect } from "react";
import api from "../../utils/api";

export default function TabEdit(props) {
	const [tab, setTab] = useState({
        name : "",
        url : "",
        notes : "",
        category : "",
        id : "",
        user_id: ""
    })

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        api()
            .get("/tabs/categories")
            .then((result) => {
                setCategories(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

	const handleChange = (event) => {
		setTab({
			...tab,
			[event.target.name]: event.target.value,
		})
    }

	const handleSubmit = (event, id) => {
        event.preventDefault()

		api()
			.put(`tabs/${props.tab.user_id}/${props.tab.id}`, tab)
			.then((result) => {
				props.history.push("/account")
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<>
			<h1>Edit Tab</h1>

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
                
                
                <select 
                    name="category" 
                    value={tab.category} 
                    onChange={handleChange}>
                        {categories &&
                            categories.map(category =>
                                <option value={category.category} >{category.category}</option>
                        )}
                </select>
                    
                
				<button type="submit">Save</button>
                <button >Cancel</button>
			</form>
		</>
	)
}