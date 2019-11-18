import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

export default function TabPreview(){
    const [tabs, setTab] = useState({
        "name" : "",
        "url" : "",
        "notes" : "",
        "id" : ""
    })

    useEffect(() => {
        api()
            .get("/tabs/{{user_id}}")
            .then((result) => {
                setTab(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return(
        <div>
            <h1>My tabs</h1>
            <p>{tabs.name.toString()}</p>
        </div>
    )
}



// 	useEffect(() => {
// 		api()
// 			.get("/users")
// 			.then((result) => {
// 				setUsers(result.data)
// 			})
// 			.catch((error) => {
// 				console.log(error)
// 			})
// 	}, [])

// 	const handleDelete = (event, id) => {
// 		event.preventDefault()

// 		// get user object in case we need to restore it
// 		const user = users.find((user) => user.id === id)

// 		if (window.confirm("Are you sure you want to delete this user?")) {
// 			// an optimistic update, assuming the request was successful
// 			// so we don't have to wait for it to complete
// 			setUsers(users.filter((user) => user.id !== id))

// 			api()
// 				.delete(`/users/${id}`)
// 				.then((result) => {
// 					console.log("User was deleted")
// 				})
// 				.catch((error) => {
// 					console.log(error)

// 					// put user back if the request wasn't successful
// 					setUsers([...users, user])
// 				})
// 		}
// 	}

// 	return (
// 		<>
// 			<h1>Users</h1>

// 			{users.map((user) => (
// 				<div key={user.id} className="account">
// 					<Link className="account-update" to={`/users/${user.id}`}>
// 						Edit
// 					</Link>
// 					<div
// 						className="account-delete"
// 						onClick={(e) => handleDelete(e, user.id)}
// 					>
// 						Delete
// 					</div>

// 					<div className="account-row">Name: {user.name}</div>
// 					<div className="account-row">Email: {user.email}</div>
// 				</div>
// 			))}
// 		</>
// 	)
// }

// export default Users
