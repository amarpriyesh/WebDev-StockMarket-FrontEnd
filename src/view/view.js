
import React from "react";
import ViewList from "./viewList.js"
import '../css/index.css';
import CreateView from "./create-view";

function View() {
    return(
        <>
            <h4 className="font-monospace">Views</h4>

            <CreateView/>

            <ViewList />


        </>
    )
}

export default View;