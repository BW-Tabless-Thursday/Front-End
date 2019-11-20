//Form Element for creating the tab that will be saved.
//This form will show up in a modal
//Tab Title will serve as visual -- User Typed
//Tab Link will be the copy and pasted link
//Tab Notes will be reminder text user input
//Category : where you can select or input a category for organization
//submit button

import React, { useState, useEffect } from 'react';
import api from "../../utils/api";
import TabEdit from './TabEdit';
// import { connect } from "react-redux";
// import {addTab} from "../../actions/tab_action";

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
            "id": 7,
            "url": tab.url,
            "name": tab.name,
            "notes": tab.notes,
            "user_id": props.location.state,
            "category_id": 2
            // category: ""
        }

        props.addTab(e, addNewTab)

        // const addNewTab = {
        //     id: Date.now(),
        //     url: tabLink,
        //     name: tabTitle,
        //     notes: tabNotes,
        //     user_id: props.location.state,
        //     category_id: 2,
        //     // category: ""
        // }

        // console.log(addNewTab);

        // api()
        // .post(`/tabs/${props.location.state}`, addNewTab)
        // .then(response => {
        //     console.log(response.data.tabs);
        //     // props.setTabs([...props.tabs, addNewTab])
        //     setTabTitle("");
        //     setTabNotes("");
        //     setTabLink("")
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
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

// function mapStateToProps(state) {
//     return {
//       tabs: state.tabs,
//       error: state.error,
//       isFetching: state.isFetching
//     };
//   };
  
//   const mapDispatchToProps = {
//       addTab
//   }
  
export default CreateTabs;
//   export default connect(mapStateToProps, mapDispatchToProps)(CreateTabs);
