//Form Element for creating the tab that will be saved.
//This form will show up in a modal
//Tab Title will serve as visual -- User Typed
//Tab Link will be the copy and pasted link
//Tab Notes will be reminder text user input
//Category : where you can select or input a category for organization
//submit button

import React, { useState } from 'react';
import api from "../../utils/api";
// import { connect } from "react-redux";
// import {addTab} from "../../actions/tab_action";

function CreateTabs(props) {
    const [tabTitle, setTabTitle] = useState('');
    const [tabNotes, setTabNotes] = useState('');
    const [tabLink, setTabLink] = useState('');

    // const [categories, setCategories] = useState('');//does this need to be an array?

    function handleSubmit(e){
        e.preventDefault();

        const newTab = {
            id: Date.now(),
            url: tabLink,
            name: tabTitle,
            notes: tabNotes,
            user_id: props.location.state,
            category_id: 2,
            // category: ""
        }

        console.log(newTab);

        api()
        .post(`/tabs/${props.location.state}`, newTab)
        .then(response => {
            console.log(response.data.tabs);
            // props.setTabs([...props.tabs, newTab])
            setTabTitle("");
            setTabNotes("");
            setTabLink("")
            // addTab();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // function addTab(){
    //     const newTab = {
    //         id: Date.now(),
    //         url: tabLink,
    //         name: tabTitle,
    //         notes: tabNotes,
    //         user_id: props.location.state,
    //         category_id: null,
    //         category: ""
    //     }
    //     props.setTabs([...props.tabs, newTab])
    //     setTabTitle("");
    //     setTabNotes("");
    //     setTabLink("")
    // }

    function handleNameChange(e){
        setTabTitle(e.target.value)
    }

    function handleNoteChange(e){
        setTabNotes(e.target.value)
    }

    function handleUrlChange(e){
        setTabLink(e.target.value)
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text"
                    placeholder="Name"
                    name="Name"
                    value={tabTitle}
                    onChange={handleNameChange}
                />

                <input 
                    type="text"
                    placeholder="Notes"
                    name="Notes"
                    value={tabNotes}
                    onChange={handleNoteChange}
                />

                <input 
                    type="url"
                    placeholder="URL"
                    name="URL"
                    value={tabLink}
                    onChange={handleUrlChange}
                />

                {/* <select 
                    name="category" 
                    value={tab.category} 
                    onChange={handleChange}>
                        {categories &&
                            categories.map(category =>
                                <option value={category.category} >{category.category}</option>
                        )}
                </select> */}

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
