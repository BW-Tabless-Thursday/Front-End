import React, { useState, useEffect } from "react";
import api from "../../utils/api";

import TabEdit from "./TabEdit";

export default function TabPreview(props){
    
    const [editing, setEditing] = useState(false);

    const editTab = () => {
        setEditing(true)
    }

    const handleDelete = (event) => {
		event.preventDefault()

		if (window.confirm(`Are you sure you want to delete ${props.tab.name} tab?`)) {
			
			api()
				.delete(`/tabs/${props.tab.user_id}/${props.tab.id}`)
				.then((result) => {
                    // ДОБАВИТИ, КУДИ БУДЕ ПЕРЕХОДИТИ І ЩО БУДЕ ВИДНО
					console.log("Tab was deleted")
				})
				.catch((error) => {
					console.log(error)
					props.setTabs([...props.tabs, props.tab])
				})
		}
	}

    return(
        <div>
            <h3>{props.tab.name}</h3>
            <p>{props.tab.url}</p>
            <p>{props.tab.notes}</p>
            <p>{props.tab.category}</p>

            <button onClick={(e) => handleDelete(e)}>
				Delete
			</button>

            <button onClick={() => editTab()}>
				Edit
			</button>

            {editing &&
                <TabEdit tab={props.setTabs}/>}
        </div>
    )
}
