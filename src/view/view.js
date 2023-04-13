import NewsItem from "../news/news-item";
import React from "react";
import ViewList from "./viewList.js"
import '../css/index.css';

function View() {
    return(
        <>
            <h4>Views</h4>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control rounded"
                    placeholder="Search"

                />
                <button className="btn btn-primary rounded ml-2" type="submit">Search</button>
            </div>

            <ViewList />


        </>
    )
}

export default View;