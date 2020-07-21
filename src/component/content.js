import React from 'react'

function Content(props){
    console.log(props)
    return(
    <div>
        <h2>{props.name}</h2>
        <img src ={props.image_url} alt="" />
    </div>
    )
}

export default Content