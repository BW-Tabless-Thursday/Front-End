//Look at my other react items. See if we can render the same way
//as other projects using .map to create list of categories


import React, { useState, useEffect } from "react";
import api from "../../utils/api";

export default function ListOfCategories(){

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

    return(
        <div>

            {categories &&
                categories.map(category => (
                    <div>
                        <h4>{category.category}</h4>
                    </div>
            ))}

        </div>
    )
}