import React from "react";

import "./Category.css";

export default function CategoryCard(props){

  return(
    <div className="CategoryCard">
      <h4 key={props.category.id}>{props.category.category}</h4>
    </div>
  )
}