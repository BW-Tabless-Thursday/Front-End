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
