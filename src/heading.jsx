import React from "react";

function Head(props) {
    
    return (
        <>

            <div className="box">
                <ul>
                    <li>{ props.id }</li>
                    <li>{ props.name }</li>
                    <li>{ props.address }</li>
                </ul>
            </div>

        </>
    )
};

export default Head;