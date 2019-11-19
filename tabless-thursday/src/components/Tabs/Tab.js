import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

export default function TabPreview(props){
    // const [tabs, setTab] = useState({
    //     "name" : "",
    //     "url" : "",
    //     "notes" : "",
    //     "id" : ""
    // })

    // useEffect(() => {
    //     api()
    //         .get("/tabs/{{user_id}}")
    //         .then((result) => {
    //             setTab(result.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

    return(
        <div>
            <h3>{props.tab.name}</h3>
        </div>
    )
}
