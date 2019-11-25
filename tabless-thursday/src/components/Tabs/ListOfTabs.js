import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { connect } from "react-redux";

import {showTabs} from "../../actions/tab_action";

import TabPreview from "./Tab";
import CreateTabs from "./CreateTabs";

import ListOfCategories from "../Categories/ListOfCategories";

import 'typeface-roboto';

function ListOfTabs(props) {
	console.log(props);
	const {tab, showTabs} = props;
	// const [tabs, setTabs] = useState([])
	let tabContainer = {
		backgroundColor : 'lightGrey',
		padding: '1%',
		marginTop: '2%',
	}
	let createTabContainer = {
		marginTop: '1%',
		marginLeft: '3%',
		marginRight: '2%',
	}

	useEffect(() => {
		showTabs()
		// console.log(showTabs())
	}, [showTabs])

	// const handleDelete = (event) => {
	// 	event.preventDefault();
	// 	const TabName = props.tab.tabs.name;
	// 	const tabID = props.tab.tabs.id;
	// 	if (window.confirm(`Are you sure you want to delete ${TabName} tab?`)) {
	// 	console.log("Your tab was deleted")
	// 	  deleteTab(tabID)
	// 	}
	// }

	return (
		<div>
			{/* <ListOfCategories location={props.location} setTabs={setTabs} tabs={tabs}/> */}
			<ListOfCategories location={props.location}  tabs={tab.tabs}/>
			<div style={tabContainer}>
            <h3>My tabs</h3>
			<div>
				{tab.tabs &&
					tab.tabs.map(tab => (
                        <div>
                            {/* <h1>{tab.name}</h1> */}
                            {/* <TabPreview key={tab.id} tab={tab} tabs={tabs} setTabs={setTabs} location={props.location}/> */}
							<TabPreview key={tab.id} tab={tab} history={props.history}/>
                        </div>
				))}
			</div>
			<div style={createTabContainer}>
			{/* <CreateTabs location={props.location} tabs={tabs} setTabs={setTabs} /> */}
			</div>
			</div>
        </div>
	)
}

function mapStateToProps(state) {
	return {
	  ...state
	}
}
  
const mapDispatchToProps = {
	showTabs
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ListOfTabs)