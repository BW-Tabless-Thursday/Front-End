import React, { useContext } from "react";

import TabPreview from "./Tab";
import CreateTabs from "./CreateTabs";

import { TabContext } from "../../contexts/TabContext";

import 'typeface-roboto';

export default function ListOfTabs() {

	const {tabs} = useContext(TabContext);
	
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

	return (
		<div>
			<div style={tabContainer}>
				<h3>My tabs</h3>
				<div>
					{tabs &&
						tabs.map(tab => (
							<div>
								<TabPreview key={tab.id} tab={tab}/>
							</div>
					))}
				</div>
				<div style={createTabContainer}>
					<CreateTabs />
				</div>
			</div>
        </div>
	)
}