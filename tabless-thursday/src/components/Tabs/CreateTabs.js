//Form Element for creating the tab that will be saved.
//This form will show up in a modal
//Tab Title will serve as visual -- User Typed
//Tab Link will be the copy and pasted link
//Tab Notes will be reminder text user input
//Category : where you can select or input a category for organization
//submit button

import React, { useState } from 'react';
import { connect } from "react-redux";
import {addTab} from "../../actions/tab_action";

function CreateTabs(props) {
    const [tabTitle, setTabTitle] = useState('');
    const [tabNotes, setTabNotes] = useState('');
    const [tabLink, setTabLink] = useState('');

    // const [categories, setCategories] = useState('');//does this need to be an array?

    function handleSubmit(e){
        e.preventDefault();
        props.addTab({
            id: Date.now(),
            url: tabLink,
            name: tabTitle,
            notes: tabNotes
            // user_id: 1,
            // category_id: 2,
            // category: "School"
        });
        setTabTitle("");
        setTabNotes("");
        setTabLink("")
      }

    function handleNameChange(e){
        e.preventDefault();
        setTabTitle(e.target.value)
    }

    function handleNoteChange(e){
        e.preventDefault();
        setTabNotes(e.target.value)
    }

    function handleUrlChange(e){
        e.preventDefault();
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

function mapStateToProps(state) {
    return {
      tabs: state.tabs,
      error: state.error,
      isFetching: state.isFetching
    };
  };
  
  const mapDispatchToProps = {
      addTab
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateTabs);
